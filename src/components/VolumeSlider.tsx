import { Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (value: number[]) => void;
  onMuteToggle: () => void;
  isMuted: boolean;
}

const VolumeSlider = ({ volume, onVolumeChange, onMuteToggle, isMuted }: VolumeSliderProps) => {
  return (
    <div className="flex items-center gap-3 w-full max-w-xs">
      <button
        onClick={onMuteToggle}
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
        onValueChange={onVolumeChange}
        max={100}
        step={1}
        className="flex-1"
      />
      <span className="text-xs text-muted-foreground w-8 text-right">
        {isMuted ? 0 : volume}%
      </span>
    </div>
  );
};

export default VolumeSlider;
