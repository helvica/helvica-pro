"use client";

import { useEffect, useRef } from "react";

export default function BioWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create flowing wave lines
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.01 + t + j) * (40 + j * 20);

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(100,180,255,${0.15 + j * 0.05})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Add floating nodes on wave
      for (let i = 0; i < 25; i++) {
        const x = (i / 25) * canvas.width;
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.01 + t) * 50;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,200,255,0.6)";
        ctx.fill();
      }

      t += 0.01;
      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}