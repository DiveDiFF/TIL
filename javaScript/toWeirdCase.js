


// function toWeirdCase(s) {
//   var result = ''
//   for (var i = 0; i <= s.length-1; i++) {
//     i % 2 === 0 ? s = s.replace(s[i], s[i].toUpperCase()) : s = s.replace(s[i], s[i].toLowerCase());
//   }
//   return s;
// }

function toWeirdCase(s) {
  var result = []
  var split = s.split(' ');
  for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < split[i].length; j++) {
      if ( j % 2 === 0) {
        result += split[i][j].toUpperCase()
      }
      else {
        result += split[i][j].toLowerCase()
      }
    }
    result += ' ';
  }
  return result;
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'