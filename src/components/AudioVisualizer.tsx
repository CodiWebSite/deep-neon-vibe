import { useEffect, useState } from "react";

interface AudioVisualizerProps {
  isPlaying: boolean;
}

const AudioVisualizer = ({ isPlaying }: AudioVisualizerProps) => {
  const [bars] = useState(Array.from({ length: 12 }, (_, i) => i));

  return (
    <div className="flex items-end justify-center gap-1 h-16">
      {bars.map((bar) => (
        <div
          key={bar}
          className={`w-1.5 rounded-full bg-gradient-to-t from-primary to-secondary transition-all duration-150 ${
            isPlaying ? "animate-wave" : "h-2"
          }`}
          style={{
            height: isPlaying ? `${Math.random() * 100}%` : "8px",
            animationDelay: `${bar * 0.1}s`,
            minHeight: "8px",
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
