import React, { useEffect, useState } from "react";

type SlotKey = "deep" | "popcorn" | "party";

const getSlot = (hour: number): SlotKey => {
  if (hour >= 20 || hour < 5) return "party";
  if (hour >= 18 && hour < 20) return "popcorn";
  return "deep";
};

const Logo = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const slot = getSlot(currentHour);

  const config = {
    deep: {
      first: "Deep",
      firstColor: "text-primary",
      lastColor: "text-secondary",
      lastNeon: "neon-text-secondary",
      firstNeon: "neon-text",
      tagline: "Afro & Deep House",
      lineColor: "via-primary",
      lineColorAlt: "via-secondary",
    },
    popcorn: {
      first: "Popcorn",
      firstColor: "text-accent",
      lastColor: "text-primary",
      lastNeon: "neon-text",
      firstNeon: "neon-text-secondary",
      tagline: "Popcorn Music Mix",
      lineColor: "via-accent",
      lineColorAlt: "via-primary",
    },
    party: {
      first: "Party",
      firstColor: "text-secondary",
      lastColor: "text-primary",
      lastNeon: "neon-text",
      firstNeon: "neon-text",
      tagline: "Manele & Party Mix",
      lineColor: "via-secondary",
      lineColorAlt: "via-primary",
    },
  }[slot];

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        <span className={`${config.firstNeon} ${config.firstColor}`}>
          {config.first}
        </span>
        <span className="text-foreground mx-2">Funky</span>
        <span className={`${config.lastNeon} ${config.lastColor}`}>
          Radio
        </span>
      </h1>
      <div className="mt-3 flex items-center justify-center gap-2">
        <div className={`h-px w-12 bg-gradient-to-r from-transparent ${config.lineColor} to-transparent`} />
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em]">
          {config.tagline}
        </p>
        <div className={`h-px w-12 bg-gradient-to-r from-transparent ${config.lineColorAlt} to-transparent`} />
      </div>
    </div>
  );
};

export default Logo;
