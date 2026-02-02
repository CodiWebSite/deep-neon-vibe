import { Smartphone, Download, Share, Plus, MoreVertical } from "lucide-react";
import { useState } from "react";

const InstallGuide = () => {
  const [activeTab, setActiveTab] = useState<"android" | "ios">("android");

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Download className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
            Instalează Aplicația
          </span>
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("android")}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "android"
                ? "bg-primary/20 text-primary border border-primary/30"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
            }`}
          >
            Android
          </button>
          <button
            onClick={() => setActiveTab("ios")}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "ios"
                ? "bg-primary/20 text-primary border border-primary/30"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
            }`}
          >
            iPhone / iPad
          </button>
        </div>

        {/* Instructions */}
        <div className="space-y-3">
          {activeTab === "android" ? (
            <>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Deschide site-ul în <span className="text-primary font-medium">Chrome</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Apasă pe <MoreVertical className="inline w-4 h-4 text-primary" /> (meniul cu 3 puncte) din dreapta sus
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Selectează <span className="text-primary font-medium">"Adaugă pe ecranul principal"</span> sau <span className="text-primary font-medium">"Instalează aplicația"</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Confirmă și gata! <Smartphone className="inline w-4 h-4 text-secondary" /> Aplicația apare pe ecran
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Deschide site-ul în <span className="text-primary font-medium">Safari</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Apasă pe <Share className="inline w-4 h-4 text-primary" /> (butonul Share) din bara de jos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Derulează și selectează <span className="text-primary font-medium">"Adaugă pe ecranul principal"</span> <Plus className="inline w-4 h-4 text-primary" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/20">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/80">
                    Apasă <span className="text-primary font-medium">"Adaugă"</span> și gata! <Smartphone className="inline w-4 h-4 text-secondary" />
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Benefit note */}
        <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <p className="text-xs text-center text-foreground/70">
            ✨ Aplicația funcționează ca o aplicație normală, fără a ocupa spațiu!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallGuide;
