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
      if ((i + 1) % 4 == 0) cvs.strokeStyle = colorSet.brightMainColor;
      else cvs.strokeStyle = colorSet.brightSubColor;
      const size = this.returnSize(
        rectData.positionX[i],
        rectData.positionY[i],
        rectData.size[i],
        rectData.rotate[i]
      );
      this.strokeRect(size);
      console.log(size);
    }
    cvs.save();
  };

  strokeRect = ({ positionX, positionY, size, rotate }: rectDataType) => {
    const cvs: CanvasRenderingContext2D = this.ctx;
    cvs.save();
    cvs.translate(positionX, positionY - size / 2);
    cvs.rotate(rotate);
    cvs.strokeRect(0, 0, size, size);
    cvs.restore();
  };

  returnSize = (
    positionX: number,
    positionY: number,
    size: number,
    rotate: number
  ): rectDataType => {
    const width = windowSize.width;
    const height = windowSize.height;
    const rad = (Math.PI / 180) * rotate;
    const x = width * positionX;
    const y = height * positionY;
    const strokeSize = height <= width ? height * size : width * size;
    return { rotate: rad, positionX: x, positionY: y, size: strokeSize };
  };
}

export default drawing;
