"use client";

import { useEffect, useRef } from "react";

export default function FullscreenWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically enter fullscreen on mobile
    if (window.innerWidth < 1024) {
      const el = containerRef.current;
      if (el && el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el && (el as any).webkitRequestFullscreen) {
        // for Safari
        (el as any).webkitRequestFullscreen();
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {children}
    </div>
  );
}
