import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  type: "circle" | "square" | "star";
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(45 100% 60%)", // Gold
      "hsl(320 100% 60%)", // Magenta
      "hsl(180 100% 50%)", // Cyan
      "hsl(280 100% 60%)", // Purple
      "hsl(0 100% 65%)", // Red
      "hsl(120 100% 50%)", // Green
    ];

    const types: ("circle" | "square" | "star")[] = ["circle", "square", "star"];

    const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
      type: types[Math.floor(Math.random() * types.length)],
    }));

    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {piece.type === "circle" && (
            <div
              className="rounded-full"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === "square" && (
            <div
              className="rotate-45"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === "star" && (
            <div
              style={{
                fontSize: piece.size,
                color: piece.color,
              }}
            >
              ✦
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
