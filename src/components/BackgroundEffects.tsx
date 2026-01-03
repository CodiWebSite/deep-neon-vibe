const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, hsl(320 100% 60% / 0.4) 0%, transparent 70%)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl animate-breathe"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 60% / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(180 100% 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(180 100% 50%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(240 10% 4%) 100%)",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
