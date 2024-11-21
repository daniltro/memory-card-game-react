export const svgToBase64 = (svg: string) => {
  return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;
};

export const generateRandomSeed = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let seed = '';
  for (let i = 0; i < 8; i += 1) {
    seed += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return seed;
};

export const generateNewSeeds = () => {
  const newSeeds = [];
  for (let i = 0; i < 8; i++) {
    newSeeds.push(generateRandomSeed());
  }
  return newSeeds;
};
