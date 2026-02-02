import { useState, useRef, useEffect } from "react";
import { Play, Pause, Radio } from "lucide-react";
import LiveIndicator from "./LiveIndicator";
import VolumeSlider from "./VolumeSlider";
import AudioVisualizer from "./AudioVisualizer";

const STREAM_URL = "https://sonic2-rbx.cloud-center.ro/8026/stream";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(STREAM_URL);
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback failed:", error);
      } finally {
        setIsLoading(false);
      }
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
      <div className="relative glass-card rounded-3xl p-8 md:p-10">
        {/* Live indicator */}
        <div className="flex justify-center mb-6">
          <LiveIndicator />
        </div>

        {/* Station info */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Radio className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Streaming Live
            </span>
          </div>
          <h2 className="text-lg md:text-xl font-medium text-foreground/80">
            Afro & Deep House Mix
          </h2>
        </div>

        {/* Audio visualizer */}
        <div className="mb-8">
          <AudioVisualizer isPlaying={isPlaying} />
        </div>

        {/* Play button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className={`relative group w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-300 ${
              isPlaying
                ? "bg-gradient-to-br from-primary to-secondary neon-glow"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {/* Rotating ring when playing */}
            {isPlaying && (
              <div
                className="absolute inset-[-4px] rounded-full animate-spin-slow opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, transparent, hsl(180 100% 50%), transparent, hsl(320 100% 60%), transparent)",
                }}
              />
            )}

            <div className={`relative z-10 ${isPlaying ? "text-primary-foreground" : "text-foreground"}`}>
              {isLoading ? (
                <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" />
              ) : (
                <Play className="w-10 h-10 md:w-12 md:h-12 ml-1" fill="currentColor" />
              )}
            </div>
          </button>
        </div>

        {/* Volume control */}
        <div className="flex justify-center">
          <VolumeSlider
            volume={volume}
            onVolumeChange={handleVolumeChange}
            onMuteToggle={toggleMute}
            isMuted={isMuted}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
