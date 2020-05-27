import * as React from "react";
import { useEffect, useRef } from "react";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getContext = (): CanvasRenderingContext2D => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    return canvas.getContext("2d");
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    ctx.fillRect(0, 0, 100, 100);
    ctx.save();
  });

  return (
    <div>
      <canvas className="canvas" ref={canvasRef} />
    </div>
  );
};

export default Canvas;
