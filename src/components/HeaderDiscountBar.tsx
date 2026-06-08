import { useState, useEffect } from "react";

export default function HeaderDiscountBar() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15:00 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60)); // Loops back when finished to keep active tension
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-pizza-red text-white py-2.5 px-4 text-center font-display font-bold text-sm tracking-wide shadow-md relative z-10 flex items-center justify-center gap-2">
      <span>🔥 DESCONTO SÓ HOJE! Expira em:</span>
      <span className="bg-white text-pizza-red px-2 py-0.5 rounded font-mono font-bold text-base border border-pizza-red/10 shadow-sm">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
