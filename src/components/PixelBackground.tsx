import { useEffect, useRef } from "react";

const NUM_STARS = 90;
const SPEED = 0.0012;

interface Star {
  x: number;
  y: number;
  z: number;
}

function randomStar(): Star {
  return {
    x: Math.random() - 0.5,
    y: Math.random() - 0.5,
    z: Math.random() * 0.9 + 0.1,
  };
}

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect user's motion preference and skip on low-power devices
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let animId: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: NUM_STARS }, () => randomStar());

    const draw = () => {
      ctx.fillStyle = "rgba(20, 20, 16, 0.3)";
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      for (const star of stars) {
        star.z -= SPEED;

        if (star.z <= 0.01) {
          Object.assign(star, randomStar());
          continue;
        }

        const scale = 1 / star.z;
        const sx = Math.floor(star.x * scale * w + cx);
        const sy = Math.floor(star.y * scale * h + cy);

        if (sx < 0 || sx >= w || sy < 0 || sy >= h) {
          Object.assign(star, randomStar());
          continue;
        }

        const closeness = 1 - star.z;
        const alpha = closeness * 0.28;
        const size = closeness > 0.75 ? 2 : 1;

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(sx, sy, size, size);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
