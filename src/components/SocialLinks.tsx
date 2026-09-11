import { Facebook } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Urmărește-ne
          </h2>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61581120148505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
            <span className="font-medium">Deep Funky Radio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
