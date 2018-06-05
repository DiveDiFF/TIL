
function getCount8() {
  
  var str = '';
  for (var i =0; i <= 10000; i++){
    str += i;
  }
  console.log(str);
  var count = 0;
  for (var j =0; j <= str.length; j++){
    if (str[j] === '8') {
      count++;
    }
  }
  return count;  
}


console.log(getCount8());