"use client";

export default function FullscreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      <button
        onClick={() => {
          const el = document.documentElement;
          if (el.requestFullscreen) {
            el.requestFullscreen();
          } else if ((el as any).webkitRequestFullscreen) {
            // For Safari
            (el as any).webkitRequestFullscreen();
          }
        }}
        className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-lg z-50"
      >
        Go Fullscreen
      </button>

      {children}
    </div>
  );
}
