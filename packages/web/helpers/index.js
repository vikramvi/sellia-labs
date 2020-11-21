/**
 * Add the element to the array if not already exists and remove if already exists
 * @param {String|| Number} needle
 * @param {Array} haystack
 */
export const addOrRemove = (needle, haystack = []) => {
  for (let index in haystack) {
    if (haystack[index] === needle) {
      haystack.splice(index, 1);
      return haystack;
    }
  }
  haystack.push(needle);
  return haystack;
};

/**
 * Find out is a ny data exists in any array
 * @param {String | Number} needle
 * @param {Array} haystack
 */
export const inArray = (needle, haystack) => {
  for (var i in haystack) {
    if (haystack[i] == needle) {
      return true;
    }
  }
  return false;
};
