import { useRef } from "react";

interface PixelatedProps {
  isMuted: boolean;
}

export default function Pixelated({ isMuted }: PixelatedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute top-0 left-20 md:left-40 w-full pointer-events-none"
      ref={containerRef}
    >

      <div
        id="image-container"
        className="w-1/2 md:w-1/3 h-1/2 overflow-hidden relative text-white"
        style={{ filter: "url(#pixelate-filter)" }}
      >
        <video
          src={"https://cdn.cosmos.so/96ae0b34-289d-489d-94a1-c68925ddd3a9.mp4"}
          className="w-full object-cover  inset-0"
          autoPlay
          muted={isMuted}
          playsInline
          loop
          style={{
            filter: "url(#pixelate-filter)",
            transformOrigin: "center center",
            width: "100%",
            height: "50%",
            objectFit: "cover"
          }}
        />
      </div>
    </div>
  );
}
