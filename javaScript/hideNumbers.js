function hideNumbers(str){
    
    for (var i = 0; i <= str.length - 5 ; i++){
      str = str.replace(str[i], '*');
    }
  return str;
  
}

console.log(hideNumbers('01033334444'));
console.log(hideNumbers('027778888'));

function hideNumbers(str){
  var hidden = '*'.repeat(str.length - 4);
  str = hidden + str.substring(str.length-4); 
  return str;
}

console.log(hideNumbers('01033334444'));
console.log(hideNumbers('027778888'));

