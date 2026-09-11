import { Facebook, Twitter, Share2, Link2, Check } from "lucide-react";
import { useState } from "react";

const ShareButtons = () => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "🎧 Ascultă Deep Funky Radio - Afro & Deep House Mix Live 24/7!";

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#1877F2]/20 hover:text-[#1877F2]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]",
    },
    {
      name: "WhatsApp",
      icon: Share2,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      color: "hover:bg-[#25D366]/20 hover:text-[#25D366]",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Share2 className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Share
          </h2>
        </div>

        {/* Share buttons */}
        <div className="flex items-center justify-center gap-3">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl bg-muted/30 text-muted-foreground transition-all duration-300 ${link.color}`}
              aria-label={`Share on ${link.name}`}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
          
          {/* Copy link button */}
          <button
            onClick={copyToClipboard}
            className={`p-3 rounded-xl transition-all duration-300 ${
              copied 
                ? "bg-primary/20 text-primary" 
                : "bg-muted/30 text-muted-foreground hover:bg-primary/20 hover:text-primary"
            }`}
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Link2 className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Copied feedback */}
        {copied && (
          <p className="text-center text-xs text-primary mt-3 animate-pulse">
            Link copiat!
          </p>
        )}
      </div>
    </div>
  );
};

export default ShareButtons;