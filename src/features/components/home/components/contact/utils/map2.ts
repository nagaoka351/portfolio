/** 2つの配列を扱うための関数*/
export const map2 = <T, U, V>(
  fn: (arg0: T, arg1: U) => V,
  arry1: T[],
  arry2: U[]
) => {
  return arry1.map((_, index) => {
    return fn(arry1[index], arry2[index]);
  });
};
