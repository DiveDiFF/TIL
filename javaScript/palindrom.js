// [length-i] 가 왜 안될까.. 이것만 되면 && true 로 검사하면 될 것 같은데..

// function checkPalindrom(str) {
//   console.log(str.length);
//   for (var i = 0; i <= (str.length/2); i++) {
//     console.log(str[i]);
//     console.log(str.length-i);
//     console.log(str[(str.length - i)]);
//   }
// }



function checkPalindrom(str) {
  // var arrstr = str.split('');
  // var revstr = arrstr.reverse();
  // var revjoin = revstr.join('');
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true