import * as React from "react";
import { useEffect, useRef } from "react";
import drawing from "./canvas/canvasFunction";
import "../sass/components/canvas.sass";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getContext = (): CanvasRenderingContext2D => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    determineTheSize(canvas);
    return canvas.getContext("2d");
  };
  const determineTheSize = (canvas: HTMLCanvasElement) => {
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.style.width = String(canvas.width / devicePixelRatio) + "px";
    canvas.style.height = String(canvas.height / devicePixelRatio) + "px";
  };
  const draw = () => {
    const ctx: CanvasRenderingContext2D = getContext();
    const cvs = new drawing(ctx);
    cvs.stroke();
  };
  useEffect(() => {
    draw();
  });

  return (
    <>
      <canvas className="canvas" ref={canvasRef} />
    </>
  );
};

export default Canvas;
