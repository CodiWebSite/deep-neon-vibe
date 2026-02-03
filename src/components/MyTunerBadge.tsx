import { Radio } from "lucide-react";

const MyTunerBadge = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Radio className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Disponibil pe toate platformele
          </span>
        </div>

        {/* MyTuner Link */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-muted-foreground text-center">
            Ascultă Deep Funky Radio pe Smart TV, mobil, desktop și multe altele
          </p>
          
          <a
            href="http://mytuner-radio.com/radio/deep-funky-radio-517837/?utm_source=widget&utm_medium=button&utm_campaign=64x64"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 hover:from-orange-500/20 hover:to-red-500/20 border border-orange-500/20 transition-all duration-300"
          >
            <img 
              src="https://static2.mytuner.mobi/static/widgets/mytuner-radio.png" 
              alt="MyTuner Radio" 
              className="w-8 h-8"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">myTuner Radio</span>
              <span className="text-xs text-muted-foreground">TV • Mobile • Desktop</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyTunerBadge;
