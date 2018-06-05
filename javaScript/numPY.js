
function numPY(s) {
  var p = 0;
  var y = 0;
  if (!s) {
    return 'True';
  }
  else {
    var uppers = s.toUpperCase();
    for (var i = 0; i <= s.length; i++) {
      if (uppers[i] === 'P') {
        p++;
      }
      else if (uppers[i] === 'Y') {
        y++;
      }
    }
    
  return  p === y;
  }
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true
