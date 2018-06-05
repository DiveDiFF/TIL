
(function printNow() {
  var today = new Date();

  var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  var day = dayNames[today.getDay()];

  var year = today.getFullYear(),
    month = today.getMonth() + 1,
    date = today.getDate(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds(),
    ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;
  hour = hour ? hour : 12;

  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  var now = year + '년 ' + month + '월 ' + date + '일 ' + hour + ':' + minute + ':' + second + ' ' + ampm;

  console.log(now);
  setTimeout(printNow, 1000);
}());