import { useEffect, useState } from "react";

const DURATION = 1100;

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setPercent(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onComplete, 300);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-300 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-display text-7xl sm:text-8xl text-foreground tabular-nums tracking-tighter">
        {percent}
        <span className="text-primary">%</span>
      </span>
      <div className="w-48 h-px bg-border overflow-hidden">
        <div className="h-full bg-primary" style={{ width: `${percent}%` }} />
      </div>
      <span className="label-mono text-muted-foreground">Loading</span>
    </div>
  );
};

export default LoadingScreen;
