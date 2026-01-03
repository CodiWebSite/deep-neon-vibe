const Logo = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        <span className="neon-text text-primary">Deep</span>
        <span className="text-foreground mx-2">Funky</span>
        <span className="neon-text-secondary text-secondary">Radio</span>
      </h1>
      <div className="mt-3 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em]">
          Afro & Deep House
        </p>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>
    </div>
  );
};

export default Logo;
