export const sixtyToDeg = (min: number): number => {
  const deg = (360 * min) / 60 + 180; // 180 is 0:00;
  return deg;
};
// hr is 24hr based
export const twentyfourToDeg = (hr: number): number =>
  Math.abs(360 * (Math.abs(12 - hr) / 12) + 180); // 180 is 0:00;
export const sixtyToCSS = (min: number): string =>
  `translate(0, 12px) rotate(${sixtyToDeg(min)}deg)`;
export const twentyfourToCSS = (hr: number): string =>
  `translate(0, 8px) rotate(${twentyfourToDeg(hr)}deg)`;