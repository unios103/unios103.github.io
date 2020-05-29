export const windowSize = {
  width: window.innerWidth * devicePixelRatio,
  height: window.innerHeight * devicePixelRatio,
};

export const colorSet = {
  mainColor: "#eebbcb",
  brightMainColor: "#f7dae3",
  subColor: "#2a83a2",
  brightSubColor: "#9bcfe2",
  textColor: "#2c3e50",
};

export const rectData = {
  size: [0.6, 0.4, 0.15, 0.4, 0.1, 0.25, 0.3, 0.25],
  positionX: [-0.05, -0.15, 0.6, 0.4, 0.7, 0.3, 0, 0.9],
  positionY: [-0.15, 0.15, 0.45, 0.6, 0.5, 0.55, 0.9, 0.15],
  rotate: [60, 25, 10, 55, 50, 20, 45, 60],
};

export type rectDataType = {
  size: number;
  positionX: number;
  positionY: number;
  rotate: number;
};
