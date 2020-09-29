
exports.min = function min (array) {
  if (array.length === 0 || array === undefined) {
      return 0;
  }
  let min = array[0];
  for(let i = 0; i < array.length; i++) {
    if (min > array[i + 1])
        min = array[i + 1];
  }
  return min;
}

exports.max = function max (array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (max < array[i + 1])
          max = array[i + 1];
    }
    return max;
}

exports.avg = function avg (array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
