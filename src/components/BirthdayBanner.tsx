import { PartyPopper, Cake, Music } from "lucide-react";

const BirthdayBanner = () => {
  return (
    <div className="relative mb-6">
      {/* Glowing banner */}
      <div className="relative glass-card rounded-2xl px-6 py-4 border border-party-gold/30 overflow-hidden">
        {/* Animated background shimmer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(45 100% 60% / 0.3), transparent)",
            animation: "shimmer 2s infinite",
          }}
        />
        
        <div className="relative flex items-center justify-center gap-3 flex-wrap">
          <PartyPopper className="w-5 h-5 text-party-gold animate-bounce" style={{ animationDelay: "0s" }} />
          <Cake className="w-5 h-5 text-party-pink animate-bounce" style={{ animationDelay: "0.1s" }} />
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
              🎂 Special Edition 🎂
            </p>
            <h3 className="text-lg md:text-xl font-bold">
              <span className="text-party-gold">Birthday</span>
              <span className="text-foreground mx-2">Party</span>
              <span className="text-party-pink">Mix!</span>
            </h3>
          </div>
          
          <Music className="w-5 h-5 text-party-cyan animate-bounce" style={{ animationDelay: "0.2s" }} />
          <PartyPopper className="w-5 h-5 text-party-gold animate-bounce" style={{ animationDelay: "0.3s", transform: "scaleX(-1)" }} />
        </div>
      </div>
      
      {/* Floating balloons */}
      <div className="absolute -top-4 -left-2 text-2xl animate-float" style={{ animationDelay: "0s" }}>
        🎈
      </div>
      <div className="absolute -top-6 -right-2 text-2xl animate-float" style={{ animationDelay: "1s" }}>
        🎈
      </div>
      <div className="absolute -top-3 left-1/4 text-xl animate-float" style={{ animationDelay: "0.5s" }}>
        🎉
      </div>
      <div className="absolute -top-5 right-1/4 text-xl animate-float" style={{ animationDelay: "1.5s" }}>
        🥳
      </div>
    </div>
  );
};

export default BirthdayBanner;
