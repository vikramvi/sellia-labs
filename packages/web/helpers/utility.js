export function toCamelCase(str) {
  if (str) {
    var arr = str.match(/[a-z]+|\d+/gi);
    return arr.map((m, i) => {
      let low = m.toLowerCase();
      if (i != 0) {
        low = low.split('').map((s, k) => (k == 0 ? s.toUpperCase() : s))
          .join``;
      }
      return low;
    }).join``;
  } else {
    return str;
  }
}
