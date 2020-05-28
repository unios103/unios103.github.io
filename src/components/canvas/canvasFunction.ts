import { windowSize, colorSet } from "./data";
class drawing {
  ctx: CanvasRenderingContext2D;
  constructor(canvas: CanvasRenderingContext2D) {
    this.ctx = canvas;
  }
  stroke = () => {
    const cvs: CanvasRenderingContext2D = this.ctx;
    cvs.lineWidth = 3;
    cvs.strokeStyle = colorSet.brightSubColor;
    cvs.strokeRect(windowSize.width / 2, windowSize.height / 2, 100, 100);
    cvs.save();
  };
  strokeRect = (x: number, y: number, size: number, color: string) => {
    const cvs: CanvasRenderingContext2D = this.ctx;
    cvs.strokeStyle = color;
    cvs.strokeRect(x, y, size, size);
  };
}

export default drawing;
