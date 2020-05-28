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
  size: [0.4, 0.2, 0.3, 0.15],
  positionX: [0.05, -0.05, 0.2, 0.25],
  positionY: [-0.05, 0.15, 0.5, 0.4],
  rotate: [40, 25, 55, 10],
};

export type rectDataType = {
  size: number;
  positionX: number;
  positionY: number;
  rotate: number;
};
