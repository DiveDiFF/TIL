// function fizzbuzz(integer) {
//   var result = [];
//   for(var i = 1; i <= integer; i++) {
//     if (i % 15 === 0) {
//       result.push('fizzbuzz');
//     }
//     else if (i % 3 === 0) {
//       result.push('fizz');
//     }
//     else if (i % 5 === 0) {
//       result.push('buzz');
//     }
//     else { result.push(i);}
//   }
//   return result;
// }

function fizzbuzz(integer) {
  var result = [];
  for(var j = 1; j <= integer; j++) {
    result.push(j);
  }
  return result.map(function(i) {
    if (i % 15 === 0) {
        return 'fizzbuzz';
    } else if (i % 3 === 0) {
        return 'fizz';
    } else if (i % 5 === 0) {
        return 'buzz';
    } else {
        return i;
    }
  })
}

console.log(fizzbuzz(30));
