import { Clock, Music, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";

const ProgramSchedule = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Party time is 20:00 - 05:00
  const isPartyTime = currentHour >= 20 || currentHour < 5;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Program
          </span>
        </div>

        {/* Schedule items */}
        <div className="space-y-3">
          {/* Party Time Slot */}
          <div
            className={`relative rounded-xl p-4 transition-all duration-300 ${
              isPartyTime
                ? "bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30"
                : "bg-muted/30"
            }`}
          >
            {isPartyTime && (
              <div className="absolute top-2 right-2">
                <span className="flex items-center gap-1 text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                  ACUM
                </span>
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${isPartyTime ? "bg-secondary/20" : "bg-muted/50"}`}>
                <PartyPopper className={`w-5 h-5 ${isPartyTime ? "text-secondary" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1">
                <div className={`text-sm font-semibold ${isPartyTime ? "text-foreground" : "text-muted-foreground"}`}>
                  20:00 - 05:00
                </div>
                <div className={`text-xs ${isPartyTime ? "text-foreground/70" : "text-muted-foreground/70"}`}>
                  Manele • Party Mix • Club Hits
                </div>
              </div>
            </div>
          </div>

          {/* Chill Time Slot */}
          <div
            className={`relative rounded-xl p-4 transition-all duration-300 ${
              !isPartyTime
                ? "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                : "bg-muted/30"
            }`}
          >
            {!isPartyTime && (
              <div className="absolute top-2 right-2">
                <span className="flex items-center gap-1 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  ACUM
                </span>
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${!isPartyTime ? "bg-primary/20" : "bg-muted/50"}`}>
                <Music className={`w-5 h-5 ${!isPartyTime ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1">
                <div className={`text-sm font-semibold ${!isPartyTime ? "text-foreground" : "text-muted-foreground"}`}>
                  05:00 - 20:00
                </div>
                <div className={`text-xs ${!isPartyTime ? "text-foreground/70" : "text-muted-foreground/70"}`}>
                  Afro House • Deep House • Chill Vibes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;