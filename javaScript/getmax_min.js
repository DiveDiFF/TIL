function getMaxValueFromArray(array) {
  return Math.max.apply(null,array);
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return Math.min.apply(null,array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5