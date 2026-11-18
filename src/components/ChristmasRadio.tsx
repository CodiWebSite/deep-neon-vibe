import { Snowflake, ExternalLink } from "lucide-react";

const ChristmasRadio = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Snowflake className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Radio de sezon
          </h2>
        </div>

        {/* Christmas station link */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-muted-foreground text-center">
            Se apropie Crăciunul! Ascultă și al doilea nostru radio, dedicat
            sezonului de sărbători.
          </p>

          <a
            href="https://radio2.djfunkyevents.ro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-emerald-500/10 hover:from-red-500/20 hover:to-emerald-500/20 border border-red-500/20 transition-all duration-300"
          >
            <Snowflake className="w-8 h-8 text-red-400" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                Crăciun Radio Iași
              </span>
              <span className="text-xs text-muted-foreground">
                Colinde &amp; muzică de sărbătoare
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChristmasRadio;
