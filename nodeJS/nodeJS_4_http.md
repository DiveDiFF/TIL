# 4. http모듈로 웹 서버 만들기

## 1. 서버만들기

CreateServer : 서버에 처음 방문하면 콜백을 실행시킴

```javascript
// createServer 뒤에 listen 메서드를 사용하여 포트 연결
import { createServer } from 'http';

createServer((req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
  // listen의 두번째 인자로 콜백을 실행시킴, 진짜 서버라면 html 파일 제공
  // listen이 서버를 계속 실행 상태로 유지하도록 해줌
  console.log('8080번 포트에서 서버 대기중입니다!');
});
```

```javascript
// listening 이벤트를 붙여 실행하는 방법
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});
server.listen(8080);
server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기중입니다!');
});
// error 이벤트 리스너
server.on('error', (error) => {
  console.error(error);
});
```

* 기본 포트 : http(80), https(443), mysql(3306) 해당 포트 번호는 생략가능
    * macOS의 경우 1024번 이하의 포트는 관리자 권한(sudo) 필요

## 2. html 파일 보내기

노드가 error에 취약하므로 항상 error관리에 신경쓸 필요 있음

res.write로 html을 한줄씩 쓰는 건 비효율적이므로 html파일을 만들어서 제공하는 방식이 일반적

```javascript
import { createServer } from 'http';
import { readFile } from 'fs';

// http 모듈의 createServer와 fs모듈의 readFile 메서드를 활용해 파일 전달
createServer((req, res) => {
  readFile('./server2.html', (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
}).listen(8081, () => {
  console.log('8081번 포트에서 서버 대기중입니다!');
});
```

## 3. 쿠키/세션 이해하기

```javascript
const http = require('http');
// 문자열 형식의 쿠키를 객체로 만들어줌
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer((req, res) => {
  // req.header.cookie에 쿠키가 들어있음, parseCookies로 객체화
  const cookies = parseCookies(req.headers.cookie);
  console.log(req.url, cookies);
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
  res.end('Hello Cookie');
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기중입니다!');
  });
```

* 요청과 응답에는 header와 body가 있음. header에 URL, cookie 등의 정보를 담음


## 4. 라우터와 분기 처리

```javascript
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    // url 파싱으로 html formd에서 보내준 url을 객체화 하여 name값만 가져옴
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키만료 시간을 5분 후로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    // 302 요청은 다른페이지로 임시이동
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  } else if (cookies.name) {
  // 한글 출력을 위한 헤더 설정
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    fs.readFile('./server4.html', (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기중입니다!');
  });
```

## 5. 메모리 세션 구현

```javascript
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

// 세션 객체를 생성
const session = {};

http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    // 랜덤한 값을 생성하여 세션 객체의 프로퍼티로 담기
    const randomInt = +new Date();
    session[randomInt] = {
      name,
      expires,
    };
    res.writeHead(302, {
      Location: '/',
      // cookie에 위에서 생성한 랜덤한 값을 보냄
      'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // 세션이 있고, 세션의 유효기간이 지나지 않았으면 이란 의미
  } else if (cookies.session && session[cookies.session].expires > new Date()) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // 세션에 있던 이름을 꺼내옴
    res.end(`${session[cookies.session].name}님 안녕하세요`);
  } else {
    fs.readFile('./server4.html', (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기중입니다!');
  });
  ```
  * 서버 메모리 세션에 저장해 두고, 쿠키에는 난수를 담아 정보를 가려주는 방식

  * 중요한 정보가 브라우저에 있으면 쿠키, 서버에 있으면 세션

## 6. REST API

GET : 가져오기
POST : 등록하기 (body 필요)
PUT : 수정 (body 필요)
PATCH : 일부 수정 (body 필요)
DELETE : 삭제

```javascript
const http = require('http');
const fs = require('fs');

// 원래는 DB를 사용해서 데이터를 쌓아둬야함
const users = {};

http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      return fs.readFile('./restFront.html', (err, data) => {
        if (err) {
          throw err;
        }
        // html 파일을 parsing
        res.end(data);
      });
    } else if (req.url === '/about') {
      return fs.readFile('./about.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/users') {
      // 객체를 json 데이터로 바꿔서 보냄
      return res.end(JSON.stringify(users));
    }
    // 이 외의 url 요청의 정적 파일은 일괄 오픈
    return fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, 'NOT FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });
  // 데이터로 받은 것들을 바디에 담아 둠
  } else if (req.method === 'POST') {
    if (req.url === '/users') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('POST 본문(Body):', body);
        const { name } = JSON.parse(body);
        const id = +new Date();
        users[id] = name;
        // writehead에 한글이면 컨텐트 타입 써줘야 함 charset=utf8
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if (req.method === 'PUT') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('PUT 본문(Body):', body);
        users[key] = JSON.parse(body).name;
        return res.end(JSON.stringify(users));
      });
    }
  } else if (req.method === 'DELETE') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      delete users[key];
      return res.end(JSON.stringify(users));
    }
  }
  res.writeHead(404, 'NOT FOUND');
  return res.end('NOT FOUND');
})
  .listen(8085, () => {
    console.log('8085번 포트에서 서버 대기중입니다');
  });
```

express를 사용하면 편하지만 순수한 javascript로 코딩 하면 너무 지저분함..

* 리팩토링 방법

```javascript
const router = {
  GET: {
    '/': 코드
    '/users': 코드
    '*': 코드
   },
  POST: {
    '/': 코드
    '/users': 코드
    '*': 코드
   },
  // 이런식으로 메서드 정리 해두고
}

const server = http.createServer((req, res) => {
  const matchedUrl = router[req.method][req.url]
  (matchedUrl || router[req.method]['*']) (req, res);
}).listen(8085, () => {
  console.log('8085번에서 대기 중입니다.');
});

// 이렇게 불러서 함수 실행
```

## 10. http, http2

https는 인증기관에서 발급한 인증서가 필요함

받았다면 createServer의 첫번째 인자로 넣어줌

```javascript
const https = require('https');
const fs = require('fs');

https.createServer({
  // 발급 인증서 정보
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
}).listen(443, () => {
  console.log('443번 포트에서 서버 대기중입니다!');
});
```

* http2 는 node10 버전의 실험적 모듈, 사용하고 싶으면 https -> http2, createServer -> createSecureServer 로 바꿔주면 됨

## 11. cluster

node가 싱글쓰레드 임에도 CPU코어를 모두 사용할 수 있게 해주는 모듈

```javascript

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// cluster에는 master와 worker 모드가 있음 cluster.fork()가 워커를 만듬
if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    cluster.fork();
  });
} else {
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Cluster!</p>');
    // 요청이 새로 갈때마다 워커들이 종료되므로 코어 숫자만큼의 워커가 있는지 확인
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }).listen(8085);

  console.log(`${process.pid}번 워커 실행`);
}
```


