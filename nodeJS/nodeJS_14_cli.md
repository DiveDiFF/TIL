# cli 프로그램 만들기

```javascript
// 해당 주석을 js 파일 상단에 입력, mac, linux에서 해당 경로의 node로 실행하라는 의미
#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  // 터미널 입력
  input: process.stdin,
  // 이후 결과 출력
  output: process.stdout,
});
```

