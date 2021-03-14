exports.min = function min (array) {
  let result = 0;
  if (array && array.length>0){
    result = array[0];
    for (let value of array) {
      result = value < result ? value : result;
    }
  }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (array && array.length>0){
    result = array[0];
    for (let value of array) {
      result = value > result ? value : result;
    }
  }
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (array && array.length>0){
    for (let value of array) {
      result += value;
    }
    result = result / array.length;
  }
  return result;
}