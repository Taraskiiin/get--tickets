export const maxValuesStops = (stops: { el: string }) => {
  const numArray: number[] = [];
  const array = Object.values(stops);
  array.forEach((el) => numArray.push(parseInt(el)));
  return numArray.reduce((a, b) => (a > b ? a : b));
};
