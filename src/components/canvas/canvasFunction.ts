class drawing {
  ctx: CanvasRenderingContext2D;
  mainColor = "#eebbcb";
  brightMainColor = "#f7dae3";
  subColor = "#2a83a2";
  brightSubColor = "#8ecae0";
  textColor = "#2c3e50";

  constructor(canvas: CanvasRenderingContext2D) {
    this.ctx = canvas;
  }
  stroke = () => {
    const cvs: CanvasRenderingContext2D = this.ctx;
    cvs.strokeStyle = this.subColor;
    cvs.strokeRect(0, 0, 100, 100);
    cvs.save();
  };
}

export default drawing;
