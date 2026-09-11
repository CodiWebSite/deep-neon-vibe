import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Radio, Music, PartyPopper, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import LiveIndicator from "./LiveIndicator";
import AudioVisualizer from "./AudioVisualizer";

const STREAM_URL = "https://sonic2-rbx.cloud-center.ro/8026/stream";

const MyTunerPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Update current hour every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Slot curent
  const slot: "deep" | "popcorn" | "party" =
    currentHour >= 20 || currentHour < 5
      ? "party"
      : currentHour >= 18
      ? "popcorn"
      : "deep";

  const slotInfo = {
    deep: { label: "Afro & Deep House", Icon: Music, color: "text-primary" },
    popcorn: { label: "Popcorn Music Mix", Icon: Sparkles, color: "text-accent" },
    party: { label: "Party & Manele Mix", Icon: PartyPopper, color: "text-secondary" },
  }[slot];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    // Creat sincron în contextul click-ului — obligatoriu pentru iOS Safari și Android Chrome
    const audio = new Audio(STREAM_URL);
    audio.volume = isMuted ? 0 : volume / 100;
    audioRef.current = audio;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // Fallback: încearcă cu mute
      try {
        audio.muted = true;
        await audio.play();
        setIsMuted(true);
        setIsPlaying(true);
      } catch {
        setHasError(true);
        audioRef.current = null;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (isMuted && value[0] > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer glow ring */}
      <div
        className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
          isPlaying ? "animate-pulse-glow opacity-100" : "opacity-0"
        }`}
        style={{
          background: "conic-gradient(from 0deg, hsl(180 100% 50% / 0.1), hsl(320 100% 60% / 0.1), hsl(180 100% 50% / 0.1))",
        }}
      />

      {/* Main card */}
      <div className="relative glass-card rounded-3xl overflow-hidden">
        {/* Header bar - MyTuner style */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-3 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Live Radio
              </span>
            </div>
            <LiveIndicator />
          </div>
        </div>

        {/* Player content */}
        <div className="p-6 md:p-8">
          {/* Station info */}
          <div className="flex items-center gap-4 mb-6">
            {/* Logo/Icon */}
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-border/50">
              <slotInfo.Icon className={`w-8 h-8 ${slotInfo.color}`} />
              {isPlaying && (
                <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
              )}
            </div>
            
            {/* Station name */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">
                Deep Funky Radio
              </h2>
              <p className="text-sm text-muted-foreground">
                {slotInfo.label}
              </p>
            </div>
          </div>

          {/* Audio visualizer */}
          <div className="mb-6">
            <AudioVisualizer isPlaying={isPlaying} />
          </div>

          {/* Error message */}
          {hasError && (
            <div className="mb-4 px-3 py-2 rounded-xl bg-destructive/10 border border-destructive/30 text-center">
              <p className="text-xs text-destructive">
                Nu s-a putut porni stream-ul. Verifică conexiunea și încearcă din nou.
              </p>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Play button */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              aria-label={isPlaying ? "Oprește redarea" : "Pornește redarea live"}
              className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                isPlaying
                  ? "bg-gradient-to-br from-primary to-secondary neon-glow"
                  : "bg-muted hover:bg-muted/80 border border-border"
              }`}
            >
              {/* Rotating ring when playing */}
              {isPlaying && (
                <div
                  className="absolute inset-[-2px] rounded-full animate-spin-slow opacity-60"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, hsl(180 100% 50%), transparent, hsl(320 100% 60%), transparent)",
                  }}
                />
              )}

              <div className={`relative z-10 ${isPlaying ? "text-primary-foreground" : "text-foreground"}`}>
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6" fill="currentColor" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                )}
              </div>
            </button>

            {/* Volume control */}
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={toggleMute}
                aria-label={isMuted || volume === 0 ? "Activează sunetul" : "Oprește sunetul"}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <Slider
                value={[isMuted ? 0 : volume]}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground w-8 text-right">
                {isMuted ? 0 : volume}%
              </span>
            </div>
          </div>
        </div>

        {/* Footer - MyTuner branding */}
        <div className="px-4 py-3 border-t border-border/50 bg-muted/30">
          <a
            href="http://mytuner-radio.com/radio/deep-funky-radio-517837/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Powered by</span>
            <img 
              src="https://static2.mytuner.mobi/static/widgets/mytuner-radio.png" 
              alt="MyTuner" 
              className="w-4 h-4"
            />
            <span className="font-medium">myTuner Radio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyTunerPlayer;
