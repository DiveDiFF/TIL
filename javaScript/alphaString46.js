

function alphaString46(s) {
  if (!s) return false;
  return !isNaN(s) && (4 <= s.length && s.length <= 6);

}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false