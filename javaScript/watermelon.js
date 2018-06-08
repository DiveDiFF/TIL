function waterMelon(n) {
  var result = "";
  for (var i = 0; i < n; i++) {
    i % 2 === 0 ? result += "수" : result += "박";
  };
  return result;
};

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));