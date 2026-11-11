# Aplicație iOS nativă pentru Deep Funky Radio

## Ce facem
Transformăm site-ul într-o aplicație iPhone reală (cu Capacitor), care poate fi publicată în App Store.

1. Instalez Capacitor (core, cli, ios, android) și creez configurația:
   - appId: `app.lovable.b15f099b6b9d414f80f20cce48c01825`
   - appName: `deep-neon-vibe` (nume afișat: Deep Funky Radio)
   - server.url către preview pentru reîncărcare live în timpul testării
2. Redare în fundal: configurație iOS ca radioul să cânte și cu ecranul blocat (UIBackgroundModes: audio) — de adăugat în Xcode după `npx cap add ios`.
3. Pictogramă aplicație și ecran de pornire din logo-ul existent.

## Ce faci tu (pe un Mac cu Xcode)
1. Export to GitHub, apoi descarci proiectul.
2. `npm install`
3. `npx cap add ios` și `npx cap update ios`
4. `npm run build` și `npx cap sync`
5. `npx cap run ios` (simulator sau iPhone conectat)
6. Pentru App Store: cont Apple Developer (99$/an), apoi trimitere din Xcode. Înainte de publicare se scoate `server.url` ca aplicația să folosească fișierele proprii.

## Note
- Site-ul rămâne neschimbat.
- Ghid: https://lovable.dev/blog/lovable-and-capacitor
