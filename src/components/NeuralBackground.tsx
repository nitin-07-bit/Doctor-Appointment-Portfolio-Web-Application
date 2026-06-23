import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid details
    const spacing = 48; // Space between dots
    let dots: Array<{
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      radius: number;
      targetRadius: number;
      colorFactor: number;
    }> = [];

    const initDots = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dots = [];

      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          dots.push({
            baseX: x,
            baseY: y,
            x: x,
            y: y,
            radius: 1.5,
            targetRadius: 1.5,
            colorFactor: 0,
          });
        }
      }
    };

    initDots();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleResize = () => {
      initDots();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const hoverRadius = 140;

      // Draw global subtle matrix
      dots.forEach((dot) => {
        let dx = mouse.x - dot.baseX;
        let dy = mouse.y - dot.baseY;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (mouse.active && dist < hoverRadius) {
          // Attract dot slightly towards mouse
          const force = (hoverRadius - dist) / hoverRadius;
          dot.x = dot.baseX + (dx / dist) * force * 8;
          dot.y = dot.baseY + (dy / dist) * force * 8;
          // Scale size and turn blue
          dot.targetRadius = 2.8;
          dot.colorFactor = Math.min(1, dot.colorFactor + 0.1);
        } else {
          // Smooth return to base
          dot.x += (dot.baseX - dot.x) * 0.12;
          dot.y += (dot.baseY - dot.y) * 0.12;
          dot.targetRadius = 1.25;
          dot.colorFactor = Math.max(0, dot.colorFactor - 0.05);
        }

        // Draw dot
        dot.radius += (dot.targetRadius - dot.radius) * 0.15;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        
        // Color transition off-white/light gray to blue
        if (dot.colorFactor > 0) {
          // Accent light blue on hover: rgba(2, 132, 199, opacity)
          // Default slate dot: rgba(94, 114, 133, opacity)
          const r = Math.round(94 + (2 - 94) * dot.colorFactor);
          const g = Math.round(114 + (132 - 114) * dot.colorFactor);
          const b = Math.round(133 + (199 - 133) * dot.colorFactor);
          const alpha = 0.08 + dot.colorFactor * 0.35;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        } else {
          ctx.fillStyle = "rgba(94, 114, 133, 0.09)"; // Very faint slate greyish blue
        }
        ctx.fill();
        
        // Draw links between close dots if active
        if (mouse.active && dist < hoverRadius - 20) {
          dots.forEach((other) => {
            if (other === dot) return;
            const odx = other.x - dot.x;
            const ody = other.y - dot.y;
            const odist = Math.sqrt(odx * odx + ody * ody);
            
            // Only draw links with immediate grid neighbors
            if (odist > 0 && odist < spacing * 1.3) {
              const omx = mouse.x - other.baseX;
              const omy = mouse.y - other.baseY;
              const odistM = Math.sqrt(omx * omx + omy * omy);
              
              if (odistM < hoverRadius) {
                // Connection intensity based on proximity to mouse
                const connectionAlpha = (1 - (dist / hoverRadius)) * (1 - (odistM / hoverRadius)) * 0.18;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(2, 132, 199, ${connectionAlpha})`; // Muted blue lines
                ctx.lineWidth = 0.55;
                ctx.stroke();
              }
            }
          });
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="neural-matrix-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
