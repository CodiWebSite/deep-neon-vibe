import Logo from "@/components/Logo";
import RadioPlayer from "@/components/RadioPlayer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <BackgroundEffects />
      
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Logo */}
        <Logo />

        {/* Player */}
        <RadioPlayer />

        {/* Footer */}
        <footer className="text-center">
          <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
            24/7 Underground Vibes
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
