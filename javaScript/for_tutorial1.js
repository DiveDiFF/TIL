//문제 1

for(i = 0; i < 10; i++){
  if(i % 2 === 0){
    console.log(i);
  };
};


//문제 2

var str = '' 

for(i = 0; i < 10; i++){
  if(i % 2 === 0){
   str += i;
  };
};

console.log(str);

//문제 3

for(i = 10; i >= 0 ; i--){
  if(i % 2){
    console.log(i);
  };
};

//문제 4

var i = 0;

while(i < 10) {
   
  if(i % 2 === 0){
    console.log(i);
  };
  i++;
};

// 문제 5

var i = 10;

while(i >= 0) {
  if(i % 2) {
    console.log(i);
  };
  i--;  
};


// 문제 6

var sum = 0;

for (i = 0; i < 10; i++) {
  sum += i;
};

console.log(sum);

// 문제 7

var sum = 0;

for (i = 0; i <= 20; i++) {
  if (!(i % 2 === 0 || i % 3 === 0)) {
    sum += i;
  };  
};

console.log(sum);


// 문제 8

var sum = 0;

for (i = 0; i <= 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  };  
};

console.log(sum);


// 문제 9

var dice = 0;

for (i = 1; i < 6; i++) {
  dice = 6 - i;
  console.log(i,dice);
};

// 문제 10

var line = 5;
var star = '';

for (i = 1; i <= line; i++) {
  star += '*';
  console.log(star);
};

// 문제 11 -1

var line1 = 3;
var line2 = 5;
var star1 = '';
var star2 = '';

for (i = 1; i <= line1; i++) {
  star1 += '*';
  console.log(star1);
};

for (j = 1; j <= line2; j++) {
  star2 += '*';
  console.log(star2);
}




