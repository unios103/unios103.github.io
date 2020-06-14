import * as React from "react";
import { useEffect, useRef } from "react";
import EventListener from "react-event-listener";
import drawing from "./canvas/canvasFunction";
import "../sass/components/canvas.sass";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const determineTheSize = (canvas: HTMLCanvasElement): void => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = String(canvas.width / devicePixelRatio) + "px";
    canvas.style.height = String(canvas.height / devicePixelRatio) + "px";
  };
  const getContext = (): CanvasRenderingContext2D => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    determineTheSize(canvas);
    return canvas.getContext("2d");
  };
  const draw = (): void => {
    const ctx: CanvasRenderingContext2D = getContext();
    const cvs = new drawing(ctx);
    cvs.stroke();
  };
  useEffect(() => {
    draw();
  });

  return (
    <>
      <EventListener target="window" onResize={draw} />
      <canvas className="canvas" ref={canvasRef} />
    </>
  );
};

export default Canvas;
