
## Problema: Player-ul nu funcționează pe dispozitive mobile

### Cauza exactă

Eroarea din consolă `NotSupportedError: The operation is not supported` apare din două motive cumulate:

1. **iOS Safari și Android Chrome blochează redarea audio** dacă elementul audio nu este creat direct dintr-un eveniment de click al utilizatorului. Codul actual creează `new Audio(STREAM_URL)` în `useEffect` (la montarea componentei), iar browserele mobile consideră că nu există o „interacțiune directă" cu utilizatorul când se apelează `.play()` mai târziu.

2. **Streamul este reîncărcat greșit**: Când dai play după pause pe un stream live, trebuie să resetezi complet sursa audio, altfel browserul nu știe de unde să reia.

### Soluția

Modificăm `src/components/MyTunerPlayer.tsx` cu trei îmbunătățiri esențiale:

**1. Creare element audio la fiecare apăsare de play** (nu la mount):
- Eliminăm `new Audio()` din `useEffect` și îl mutăm direct în funcția `togglePlay`, astfel încât să fie creat sincron în contextul click-ului utilizatorului — exact ce cer browserele mobile.

**2. Fallback cu mute pentru autoplay blocat**:
- Dacă `play()` eșuează, încercăm automat cu `muted = true` și afișăm un buton de "Unmute" pentru ca utilizatorul să poată activa sunetul.

**3. Gestionare stare eroare**:
- Adăugăm o stare `hasError` și afișăm un mesaj clar utilizatorului când redarea nu pornește, în loc să nu se întâmple nimic vizibil.

### Modificări tehnice în `MyTunerPlayer.tsx`

```text
Înainte (greșit pentru mobile):
  useEffect(() => {
    audioRef.current = new Audio(STREAM_URL);  // creat la mount, nu în click
    ...
  }, []);

  const togglePlay = async () => {
    await audioRef.current.play();  // browserul refuză - nu e în contextul click-ului
  };

După (corect pentru mobile):
  const togglePlay = async () => {
    const audio = new Audio(STREAM_URL);  // creat sincron în click
    audio.volume = isMuted ? 0 : volume / 100;
    audioRef.current = audio;
    
    try {
      await audio.play();  // funcționează pe mobile
    } catch (err) {
      // Fallback: încearcă cu mute
      audio.muted = true;
      await audio.play();
      setIsMuted(true);  // arată buton de unmute utilizatorului
    }
  };
```

### Fișiere modificate

- `src/components/MyTunerPlayer.tsx` — restructurare logică de play/pause pentru compatibilitate mobilă
