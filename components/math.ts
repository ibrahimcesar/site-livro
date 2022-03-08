const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const sum = (x: number, y: number) => {
  return x + y;
};

export { randomNum, sum };
