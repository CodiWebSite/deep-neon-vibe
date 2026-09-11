import Logo from "@/components/Logo";
import MyTunerPlayer from "@/components/MyTunerPlayer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ProgramSchedule from "@/components/ProgramSchedule";
import ShareButtons from "@/components/ShareButtons";
import SocialLinks from "@/components/SocialLinks";
import InstallGuide from "@/components/InstallGuide";
import MyTunerBadge from "@/components/MyTunerBadge";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <BackgroundEffects />
      
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Logo */}
        <Logo />

        <p className="max-w-lg text-center text-sm text-muted-foreground">
          Radio house online, live 24/7 din România: Afro House și Deep House ziua,
          party mix și manele seara. Apasă play și ascultă gratuit, direct din browser.
        </p>

        {/* Player */}
        <MyTunerPlayer />

        {/* Program Schedule */}
        <ProgramSchedule />

        {/* Social Links */}
        <SocialLinks />

        {/* Share Buttons */}
        <ShareButtons />

        {/* MyTuner Badge */}
        <MyTunerBadge />

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