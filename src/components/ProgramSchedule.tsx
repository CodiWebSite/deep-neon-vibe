import { Clock, Music } from "lucide-react";

export type Slot = {
  id: string;
  name: string;
  startHour: number;
  endHour: number;
  description: string;
  icon: typeof Music;
  accent: "primary" | "secondary" | "accent";
};

// Programul stației: non-stop Afro House / Deep House, 24/7.
export const SLOTS: Slot[] = [
  {
    id: "deepfunky",
    name: "DeePFunkyALL",
    startHour: 0,
    endHour: 24,
    description: "Afro House • Deep House • Chill Vibes",
    icon: Music,
    accent: "primary",
  },
];

export const isSlotActive = (slot: Slot, hour: number) =>
  hour >= slot.startHour && hour < slot.endHour;

export const formatRange = (slot: Slot) =>
  slot.endHour - slot.startHour >= 24
    ? "24/7"
    : `${String(slot.startHour).padStart(2, "0")}:00 - ${String(
        slot.endHour
      ).padStart(2, "0")}:00`;

const ProgramSchedule = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Program
          </h2>
        </div>

        <div className="space-y-3">
          {SLOTS.map((slot) => {
            const Icon = slot.icon;

            return (
              <div
                key={slot.id}
                className="relative rounded-xl p-4 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
              >
                <div className="absolute top-2 right-2">
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
                    ACUM
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">
                      {formatRange(slot)} • {slot.name}
                    </div>
                    <div className="text-xs text-foreground/70">
                      {slot.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;
