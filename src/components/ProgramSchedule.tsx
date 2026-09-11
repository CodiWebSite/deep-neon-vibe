import { Clock, Music, PartyPopper, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type Slot = {
  id: string;
  name: string;
  startHour: number;
  endHour: number;
  description: string;
  icon: typeof Music;
  accent: "primary" | "secondary" | "accent";
};

const SLOTS: Slot[] = [
  {
    id: "deepfunky",
    name: "DeePFunkyALL",
    startHour: 5,
    endHour: 18,
    description: "Afro House • Deep House • Chill Vibes",
    icon: Music,
    accent: "primary",
  },
  {
    id: "popcorn",
    name: "PopcornMusic",
    startHour: 18,
    endHour: 20,
    description: "Hituri Pop • Dance • Feel Good",
    icon: Sparkles,
    accent: "accent",
  },
  {
    id: "party",
    name: "Party",
    startHour: 20,
    endHour: 5,
    description: "Manele • Party Mix • Club Hits",
    icon: PartyPopper,
    accent: "secondary",
  },
];

const isSlotActive = (slot: Slot, hour: number) => {
  if (slot.startHour < slot.endHour) {
    return hour >= slot.startHour && hour < slot.endHour;
  }
  // overnight (e.g. 20 -> 5)
  return hour >= slot.startHour || hour < slot.endHour;
};

const formatRange = (slot: Slot) =>
  `${String(slot.startHour).padStart(2, "0")}:00 - ${String(slot.endHour).padStart(2, "0")}:00`;

const accentClasses = {
  primary: {
    bgActive: "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    badgeBg: "bg-primary/20 text-primary",
    badgeDot: "bg-primary",
  },
  secondary: {
    bgActive: "bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    badgeBg: "bg-secondary/20 text-secondary",
    badgeDot: "bg-secondary",
  },
  accent: {
    bgActive: "bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    badgeBg: "bg-accent/20 text-accent",
    badgeDot: "bg-accent",
  },
};

const ProgramSchedule = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

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
            const active = isSlotActive(slot, currentHour);
            const styles = accentClasses[slot.accent];
            const Icon = slot.icon;

            return (
              <div
                key={slot.id}
                className={`relative rounded-xl p-4 transition-all duration-300 ${
                  active ? styles.bgActive : "bg-muted/30"
                }`}
              >
                {active && (
                  <div className="absolute top-2 right-2">
                    <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${styles.badgeBg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${styles.badgeDot}`} />
                      ACUM
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${active ? styles.iconBg : "bg-muted/50"}`}>
                    <Icon className={`w-5 h-5 ${active ? styles.iconColor : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
                      {formatRange(slot)} • {slot.name}
                    </div>
                    <div className={`text-xs ${active ? "text-foreground/70" : "text-muted-foreground/70"}`}>
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
