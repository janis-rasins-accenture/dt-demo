/**
 * Convert RGBA values to HEX
 * @param r Red color value
 * @param g Green color value
 * @param b Black color value
 * @param a Alpha channel value
 * @returns string HEX color #000000ff
 */
export const rgbaToHex = (r: number, g: number, b: number, a: number): string => {
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);
  const alpha = Math.round(a * 255).toString(16);

  return (
    '#' +
    componentToHex(red) +
    componentToHex(green) +
    componentToHex(blue) +
    (alpha.length === 1 ? '0' + alpha : alpha)
  );
};

const componentToHex = (value: number): string => {
  const hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};
