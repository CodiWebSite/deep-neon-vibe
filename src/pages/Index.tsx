import Logo from "@/components/Logo";
import RadioPlayer from "@/components/RadioPlayer";
import BackgroundEffects from "@/components/BackgroundEffects";
import Confetti from "@/components/Confetti";
import BirthdayBanner from "@/components/BirthdayBanner";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <BackgroundEffects />
      <Confetti />
      
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Logo */}
        <Logo />

        {/* Birthday Banner */}
        <BirthdayBanner />

        {/* Player */}
        <RadioPlayer />

        {/* Footer */}
        <footer className="text-center">
          <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
            🎊 Party Mode Activated 🎊
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
