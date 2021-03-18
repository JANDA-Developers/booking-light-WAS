export const getByteLength = (s: string = ''): number => {
  let i;
  let b;
  let c;
  for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 2 : c >> 7 ? 2 : 1);
  return b;
};