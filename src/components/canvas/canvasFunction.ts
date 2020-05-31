import { windowSize, colorSet, rectData, rectDataType } from "./data";
class drawing {
  ctx: CanvasRenderingContext2D;
  constructor(canvas: CanvasRenderingContext2D) {
    this.ctx = canvas;
  }

  stroke = () => {
    const cvs: CanvasRenderingContext2D = this.ctx;
    cvs.lineWidth = 2;
    cvs.strokeStyle = colorSet.brightSubColor;
    cvs.save();
    for (let i = 0; i < rectData.size.length; i++) {
      if ((i + 1) % 3 == 0) cvs.strokeStyle = colorSet.brightMainColor;
      else cvs.strokeStyle = colorSet.brightSubColor;
      const size = this.returnSize(
        rectData.positionX[i],
        rectData.positionY[i],
        rectData.size[i],
        rectData.rotate[i]
      );
      this.strokeRect(size);
    }
    cvs.save();
  };

  strokeRect = ({ positionX, positionY, size, rotate }: rectDataType) => {
    const cvs: CanvasRenderingContext2D = this.ctx;
    cvs.save();
    cvs.translate(positionX + size * 0.5, positionY + size * 0.5);
    cvs.rotate(rotate);
    cvs.translate(-(positionX + size * 0.5), -(positionY + size * 0.5));
    cvs.strokeRect(positionX, positionY, size, size);
    cvs.restore();
  };

  returnSize = (
    positionX: number,
    positionY: number,
    size: number,
    rotate: number
  ): rectDataType => {
    const displaySize = new windowSize();
    const width = displaySize.width;
    const height = displaySize.height;
    const strokeSize = height <= width ? height * size : width * size;
    const rad = (Math.PI / 180) * rotate;
    const x = width * positionX;
    const y = height * positionY;
    return { rotate: rad, positionX: x, positionY: y, size: strokeSize };
  };
}

export default drawing;
