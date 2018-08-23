export const mapUniqElementsObject = (arr: Array<String>, fn: () => void) : any =>
(a => (
  (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val.tagName.toLowerCase()] = a[1][ind]), acc), {})
))();