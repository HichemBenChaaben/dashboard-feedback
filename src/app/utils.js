// Utilities functions

export function getRangeFromNumber(number) {
    return number > 1 ? [number].concat(getRangeFromNumber(--number)).sort() : number;
}

export function getArrayFromObject (obj) {
  let resArr = [];
  let res = Object.keys(obj).map(res => {
    if (obj[res]) {
      const num = parseInt(res, 10) + 1;
      resArr.push(num);
    }
  });
  return resArr;
}

export function getArraysDifference (arr1, arr2) {
  var ceil = 5;
  var diff = arr1.filter(item => {
    if (arr2.indexOf(item) !== -1) {
      return item;
    }
  });
  var diffLen = diff.length;
  return (diffLen < ceil) ? true : false;
}

export function sum(a, b) {
  return a + b;
}
