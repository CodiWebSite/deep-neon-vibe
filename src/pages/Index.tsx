import Logo from "@/components/Logo";
import RadioPlayer from "@/components/RadioPlayer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ProgramSchedule from "@/components/ProgramSchedule";
import ShareButtons from "@/components/ShareButtons";
import SocialLinks from "@/components/SocialLinks";
import InstallGuide from "@/components/InstallGuide";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <BackgroundEffects />
      
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Logo */}
        <Logo />

        {/* Player */}
        <RadioPlayer />

        {/* Program Schedule */}
        <ProgramSchedule />

        {/* Social Links */}
        <SocialLinks />

        {/* Share Buttons */}
        <ShareButtons />

        {/* Install Guide */}
        <InstallGuide />

        {/* Footer */}
        <footer className="text-center">
          <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
            Deep Funky Radio • Live 24/7
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;