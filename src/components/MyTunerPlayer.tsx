import { useEffect } from "react";
import LiveIndicator from "./LiveIndicator";

const MyTunerPlayer = () => {
  useEffect(() => {
    // Load MyTuner widget script
    const script = document.createElement("script");
    script.src = "https://mytuner-radio.com/static/widgets/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://mytuner-radio.com/static/widgets/js/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-3xl animate-pulse-glow opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(180 100% 50% / 0.1), hsl(320 100% 60% / 0.1), hsl(180 100% 50% / 0.1))",
        }}
      />

      {/* Main card */}
      <div className="relative glass-card rounded-3xl p-6 md:p-8">
        {/* Live indicator */}
        <div className="flex justify-center mb-4">
          <LiveIndicator />
        </div>

        {/* MyTuner Widget Container */}
        <div className="mytuner-player-wrapper">
          <div
            id="eXZ9JMOjMcO9Y8K2wrPDul9gVcOjwrJRWXzDjjo="
            className="mytuner-widget"
            data-target="517837"
            data-requires_initialization="true"
            data-autoplay="false"
            data-hidehistory="false"
          />
        </div>

        {/* Custom styles to override MyTuner defaults */}
        <style>{`
          .mytuner-player-wrapper {
            border-radius: 1rem;
            overflow: hidden;
          }
          
          .mytuner-player-wrapper .mytuner-widget {
            all: initial;
            display: block;
            color: hsl(0 0% 98%) !important;
            background: linear-gradient(180deg, hsl(240 10% 12%) 0%, hsl(240 10% 8%) 100%) !important;
            border-radius: 1rem !important;
            border: 1px solid hsl(240 10% 20% / 0.5) !important;
            overflow: hidden;
            max-height: 400px;
          }
          
          .mytuner-player-wrapper .mytuner-widget,
          .mytuner-player-wrapper .mytuner-widget * {
            box-sizing: border-box;
            font-family: 'Space Grotesk', sans-serif !important;
          }
          
          .mytuner-player-wrapper .main-play-button {
            background: linear-gradient(135deg, hsl(180 100% 50%), hsl(320 100% 60%)) !important;
            box-shadow: 0 0 20px hsl(180 100% 50% / 0.4), 0 0 40px hsl(180 100% 50% / 0.2) !important;
            border: none !important;
          }
          
          .mytuner-player-wrapper .main-play-button:hover {
            background: linear-gradient(135deg, hsl(180 100% 55%), hsl(320 100% 65%)) !important;
            box-shadow: 0 0 30px hsl(180 100% 50% / 0.6), 0 0 60px hsl(180 100% 50% / 0.3) !important;
          }
          
          .mytuner-player-wrapper .main-play-button div {
            filter: brightness(0) invert(0) !important;
          }
          
          .mytuner-player-wrapper .play-button {
            filter: invert(1) !important;
          }
          
          .mytuner-player-wrapper .volume-controls {
            background: hsl(240 10% 15%) !important;
            border-color: hsl(240 10% 25%) !important;
          }
          
          .mytuner-player-wrapper .volume-controls:hover {
            background: hsl(240 10% 18%) !important;
            border-color: hsl(180 100% 50% / 0.5) !important;
          }
          
          /* Override text colors */
          .mytuner-player-wrapper [style*="color: #3D3D3D"],
          .mytuner-player-wrapper [style*="color:#3D3D3D"] {
            color: hsl(0 0% 98%) !important;
          }
          
          /* Style any links */
          .mytuner-player-wrapper a {
            color: hsl(180 100% 50%) !important;
          }
          
          .mytuner-player-wrapper a:hover {
            color: hsl(180 100% 60%) !important;
          }
          
          /* Background overrides for inner elements */
          .mytuner-player-wrapper [style*="background: #FFF"],
          .mytuner-player-wrapper [style*="background:#FFF"],
          .mytuner-player-wrapper [style*="background: white"],
          .mytuner-player-wrapper [style*="background-color: #FFF"],
          .mytuner-player-wrapper [style*="background-color:#FFF"],
          .mytuner-player-wrapper [style*="background-color: white"] {
            background: hsl(240 10% 12%) !important;
            background-color: hsl(240 10% 12%) !important;
          }
          
          .mytuner-player-wrapper [style*="background: #F2F2F2"],
          .mytuner-player-wrapper [style*="background:#F2F2F2"],
          .mytuner-player-wrapper [style*="background-color: #F2F2F2"],
          .mytuner-player-wrapper [style*="background-color:#F2F2F2"] {
            background: hsl(240 10% 15%) !important;
            background-color: hsl(240 10% 15%) !important;
          }
          
          .mytuner-player-wrapper [style*="border: 1px solid rgb(129, 127, 128)"],
          .mytuner-player-wrapper [style*="border:1px solid rgb(129, 127, 128)"] {
            border: 1px solid hsl(240 10% 25%) !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MyTunerPlayer;
