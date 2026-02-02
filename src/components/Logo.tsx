import React, { useEffect, useState } from "react";

const Logo = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Party time is 20:00 - 05:00
  const isPartyTime = currentHour >= 20 || currentHour < 5;

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        <span className={`neon-text ${isPartyTime ? "text-secondary" : "text-primary"}`}>
          {isPartyTime ? "Party" : "Deep"}
        </span>
        <span className="text-foreground mx-2">Funky</span>
        <span className={`${isPartyTime ? "neon-text" : "neon-text-secondary"} ${isPartyTime ? "text-primary" : "text-secondary"}`}>
          Radio
        </span>
      </h1>
      <div className="mt-3 flex items-center justify-center gap-2">
        <div className={`h-px w-12 bg-gradient-to-r from-transparent ${isPartyTime ? "via-secondary" : "via-primary"} to-transparent`} />
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em]">
          {isPartyTime ? "Manele & Party Mix" : "Afro & Deep House"}
        </p>
        <div className={`h-px w-12 bg-gradient-to-r from-transparent ${isPartyTime ? "via-primary" : "via-secondary"} to-transparent`} />
      </div>
    </div>
  );
};

export default Logo;