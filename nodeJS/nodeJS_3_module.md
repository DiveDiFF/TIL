# 3. 노드 모듈

## 1. 모듈 만들기

```javascript

//var.js

const odd = '홀수';
const even = '짝수';

module.exports = {
    odd,
    even
}

//func.js

const { odd, even } = require('./var');
// import { odd, even } from './var'; ES6문법

function checkOddOrEven(num) {
    ...
}

module.exports = checkOddOrEven;
//export default checkOddOrEven; ES6

//index.js

const { odd, even } = require('./var');
const checkNumber = require('./func');
// 리콰이어 하여 가져올 때는 변수명은 바꿔도 됨

```

> moduel.exports = 'express' 로 다른 파일에서 require 가능

## 2. 노드의 글로벌 객체

브라우저의 전역객체는 window, 노드의 전역개체는 global
* 노드에는 DOM, BOM이 없기 때문에 window, document 사용 불가

> 유지보수와 성능을 위해 남용 절대 금지

## 3. console 객체

```javascript
// 인자가 같은 부분의 시간 측정
console.time('인자');
console.timeEnd('인자');

// 객체용 console
console.dir(obj, { color: true, depth: 2 });

// 에러 위치 추적할 때 해당 위치가 어떻게 불려지는지 보여줌
console.trace('에러위치추적');
```

## 4. 타이머

setTimeout, setInterval, setImmediate 으로 실행하고, clearTimeout, clearInterval, clearImmediate 로 취소

* setTimeout(func, 0) === SetImmediate

## 5. __filename, __dirname, process

__filename, __dirname : 현재 파일의 경로나 파일명 확인

process : 현재 실행 되고 있는 노드 프로세스의 정보를 담고 있음
* process.nextTick(콜백) : 이벤트 루프가 해당 콜백함수를 우선 처리하도록 함
* 마이크로태스크 큐 : process.nextTick, Promise


## 6. OS 모듈

노드가 기본적으로 가지고 있는 모듈은 언제든 불러서 사용할 수 있음

? process와 os의 차이

* uptime() : process는 노드의 실행시간, os는 운영체제 가동 시간
* os.cpus().length : CPU 코어 개수 확인

## 7. path 모듈

path.parse 로 경로 분해, path.format 으로 다시 합침

path.normalize(경로) : 잘못친 경로를 정상화 해줌
path.relative(기존경로, 비교경로) : 기준 경로에서 비교 경로로 가는 상대주소를 알려줌
path.join : 절대 경로 무시하고 합침
path.resolve : 절대 경로 고려하고 합침

## 8. url

WHATWG 방식의 url 사용
* /hello?page=10 이런 형식의 host없이 pathname만 있는 주소를 다루는 경우 url.parse만 동작

url.parse(주소) : 기존 노드의 방식, 호스트가 없어도 가능
url.URL(주소) : WHATWG 방식, search 처리가 편함

> url 을 객체로 만들어 부분별로 정리

url.format(객체) : 객체 안의 정보로 다시 조립함 (parse, URL 모두 가능)

### WHATWG 방식의 searchParams 객체

?키=값&키=값&키=값 형식으로 되어 있음

append 와 set 와 차이 : append는 기존 값을 유지한 채 추가, set은 모두 지우고 덮어씀

toString() : 객체를 다시 문자열 주소로 변환, 이 문자열을 search에 대입함

```javascript
myURL.search = myURL.searchParams.toString();
```

## 9. querystring

url.parse 로 예전 방식의 url을 사용할 때는 querystring을 이용하여 searchParams와 같은 객체를 만들어 줘야 함

querystring.parse(쿼리) : url의 쿼리 부분을 자바스크립트의 객체로 분해해줌
querystring.stringify(객체) : 분해된 쿼리 객체를 문자열로 다시 조립해줌

## 10. crypto 단방향 암호화

암호화를 도와주는 모듈임

```javascript
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
```

createHash(알고리즘) : 사용할 해시 알고리즘을 넣어줌
update(문자열) : 변환할 문자열을 넣어줌
digest(인코딩) : 인코딩할 알고리즘 넣어줌

* 단방향 암호화 : 복호화를 할 수 없음. 같은 비밀번호인지 확인하려면 둘다 암호화된 상태로 비교해야 함

> 비밀번호 충돌 : 원문이 다름에도 같인 문자열로 만들어 질 수 있음

        * pbkdf2 알고리즘 : 기존 문자열에 salt라는 문자열을 붙인 후 해시 알고리즘으 ㄹ반복해서 적용하는 방식

```javascript
import { randomBytes, pbkdf2 } from 'crypto';

randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});
```


## 11. crypto 양방향 암호화

복호화가 가능한 암호화

```javascript
import { createCipher, createDecipher } from 'crypto';

// 암호화
const cipher = createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('암호화 할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

// 복호화
const decipher = createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);
```

> 열쇠가 일치해야 하고, 노출되면 안됨.

## 12. util 강좌(promisify, deprecate)

deprecate : 더 이상 사용되지 않고, 앞으로 중단될 메서드임을 알려줄 때 사용.

promisify : 콜백 함수를 promise로 바꿔줌
callbackify : promise를 콜 백 함수로 바꿔줌

## 13. 파일 시스템 접근

fs 모듈을 사용하여 파일 시스템에 접근함

readFile('경로', 콜백) : 파일을 읽을 수 있음. toString()으로 문자열 변환해야 함. 아니면 기계어
writeFile('경로', '본문내용', '콜백') : 경로에 설정된 위치와 파일명으로 파일 생성함.

### 동기메서드와 비동기메서드

비동기 방식으로 처리되는 메서드를 동기식으로 처리하고 싶으면??
(원하는 순서대로 결과를 얻고 싶다면??)

1. fs모듈 메서드들은 Sync를 붙인 동기 메서드 사용, 직접 return 방식을 사용

* 하지만 이 방식으로 처리하면 블로킹 방식이라 해당 동작이 완료될 때까지 기다림

2. 콜백 헬 이용 (비동기지만 순서가 생김)

## 14. 버퍼와 스트림

노드의 스트림

```javascript
import { createReadStream } from 'fs';

// highWaterMark 옵션은 버퍼의 크기 설정 (16byte)
const readStream = createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

//data, end 이벤트리스너를 붙여 chunk(16byte)단위로 데이터가 올때, 마쳤을 때, 설정
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});
```

* 스트림은 버퍼의 흐림이기 때문에 여러개의 스트림을 이어 버퍼가 흘러가게 할 수 있음

```javascript
// 노드에서 파일을 복사하는 방법으로 이용됨
readStream.pipe(writeStream);

// 연달아 연속해서 쓸 수 있음
.pipe().pipe().pipe()
```

* 최근엔 copyFile메서드를 사용

## 15. 기타 fs 메서드

fs.access('파일경로', 권한)
* 권한 : F_OK(존재여부), R_OK(읽기여부), W_OK(쓰기여부)

fs.readdir(경로, 콜백) 등

fs.promise 가 등장하였으나 노드 10버전으로 실험적인 기능

## 16. 이벤트

```javascript
// EventEmitter 이벤츠 모듈에서 이벤트 에미터를 가져옴
import EventEmitter from 'events';

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});
myEvent.on('event2', () => {
  console.log('이벤트 2');
});
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', () => {
  console.log('이벤트 3');
});
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
  console.log('이벤트 4');
});

//이벤트 삭제
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
  console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
```

* on(이벤트명, 콜백) : addListener 와 같음
* emit(이벤트명) : 이벤트 호출 메서드
* removeAllListener(이벤트명) : 해당 이벤트 명에 연결된 모든 리스터 제거
* removeListener(이벤트명, 리스너) : 하나씩 제거
* listenerCount(이벤트명) : 이벤트가 몇 개 연결되어 있는지 확인

## 17. 예외 처리

예외란 처리하지 못한 에러

* 노드는 싱글쓰레드이므로 하나가 에러로 죽으면 전체 서버가 죽으므로 필수!


1. try, catch 사용
```javascript
setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버를 고장내주마!');
  } catch (err) {
    console.error(err);
  }
}, 1000);
console.log(process.argv);
```

2. 노드 내장 메서드를 활용
```javascript
import { unlink } from 'fs';

// 실행 중인 프로세서를 멈추지 않음
setInterval(() => {
  unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);

```

* error를 throw 하면 노드 프로세서가 멈춰버리므로 throw 하는 경우는 반드시 try, catch문으로 감싸줘야함

3. uncaughtException 사용
```javascript
// process에 uncaughtException 이벤트 리스너를 달아줌
process.on('uncaughtException', (err) => {
  console.error('예기치 못한 에러', err);
  process.exit();
});

setInterval(() => {
  throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
  console.log('실행됩니다');
}, 2000);
```

* 최후의 수단으로 사용!! 동작을 확실할 수 없기 때문












