# 6. express 웹서버 만들기

express-generator 설치
```
//terminal
npm i -g express-generator
express [name] --view=pug
cd [name] && npm i
```

폴더 구조
* ./bin/www : 서버 실행부
* ./app.js : 핵심 로직
* ./routes : 기본 라우터

```javascript
// app.js
const express = require('express');
const app = express();
// express 설정 또는 값 저장 (view engine setup )
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// 미들웨어 장착 (next를 마지막 인자로 줘야 다음 미들웨어로 넘어감)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 라우팅 미들웨어
app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
```
* app.get, app.post 등은 GET, POST 요청들에만 걸리는 미들웨어를 장착함. 주소가 붙으면 그 주소와 일치하는 요청만 걸림
* app.options 도 특수한 미들웨어 (CORS 요청할때 많이 씀)
* 미들웨어는 하나의 use, get 등의 메소드 뒤에 병렬로 연달아 써도 가능함
    * app.use(미들웨어, 미들웨어, 미들웨어)


## 대표적인 미들웨어

* logger : 응답이 뭐가 왔는지 콘솔에 찍어줌
* express.json, express.urlencoded : 요청의 본물을 해석해 줌, body-parser 가 express에 내장되어 있어 별도 설치 필요없음
* cookie-parser : 요청에 동봉된 쿠키를 해석해 줌. req.cookies 객체에 넣어줌
* express-session : 별도 설치 필요. 세션관리용 미들웨어 cookie-parser 보다 뒤에 넣어주는게 좋음(최신버전은 상관없음). secret 값이 cookie-parser의 secret과 같아야 함
    * saveUnitialized는 처음의 빈 세션 객체라도 저장을 할지, resave는 세션 객체에 수정 사항이 없더라도 저장을 할지 를 확인하는 옵션
* static : 요청에 부합하는 정적 파일을 발견한 경우 응답으로 해당 파일을 전송. 자체적으로 정적 파일 라우터 기능을 수행. 최대한 위쪽에 배치하는게 좋음. (보통 logger 바로 뒤에)
* connect-flash : 별도 설치 필요. cookie-parser와 express-session을 사용하므로 이들 뒤에 위치. 로그인 실패 시 팝업 메시지 띄우는 일회성 메시지를 표시해 줌.

## 라우팅 미들웨어

app.get을 이용하여 라우팅처리 할 수 있으나, 대규모 프로젝트 등에서의 깔끔한 처리를 위해 라우팅 미들웨어 사용함

* app.use('/abc') + router.get('/df') = GET /abc/df
* app.use('/') + router.post('/') = POST /

```javascript
// ./routes/index.js
var express = require('express');
var router = express.Router();

/* GET index router */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

## 404 라우터

없는 주소를 요청했을 때 처리, 404 not found
* next도 하지 않고 res 메소드도 사용하지 않으면 클라이언트는 계속 기다리게 됨(timeout 될때 까지)

```javascript
// app.js 404 처리 미들웨어(httpErrors package 사용)
app.use(function(req, res, next) {
  next(createError(404));
});

// 직접 만들면?
app.use((req, res, next) => {
  // express에서는 writeHead 대신 status 사용함
  res.status(404).send('NOT FOUND');
});
```
* next(error)를 하면 다음 미들웨어를 모두 건너뛰고 에러처리 미들웨어로 이동

```javascript
// 500 eroor 처리
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```
* 404 처리 미들웨어와 기타 에러처리 미들웨어는 마지막에 둠

## pug

열고 닫는 태그 없이 탭, 스페이스의 들여쓰기로 부모자식 태그 구분. express --view=pug 로 view 템플릿을 pug로 설정했기에 node가 pug 코드를 인식함

```pug
doctype html
html
  head
    -const title = '익스프레스'
    -const title2 = '퍼그'
    title= title + ' ' + title2
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    include header
    block content
    #zerocho(width=500)
    span.express.nodejs
    button(type='submit') 전송
    if variable
      div 참입니다
    else
      div 거짓입니다
    for i in ['사과', '배', '오렌지']
      div= i
    p | 안녕하세요
      | 여러 줄 입력
      br
      | 태그도 중간에 넣을 수 있어요
    include footer
    script.
      var message = 'pug'
      alert(message);
```
* 속성은 () 안에, div는 생략가능 내용은 태그 한 칸 띄고 작성, 아이디는 # 클래스는. , | 표시로 여러줄 작성 가능, if, else if, else, for 모두 사용 가능하나 들여쓰기 중요
* header, footer 등 다른 페이지를 include 할 수 있음
* layout을 사용하면 중복되는 구조 부분을 별도로 작성 가능. 바뀌는 부분이 block content 에 들어감

## ejs

express 옵션으로 --view=ejs 또는 app.set 에서 view engine을 바꿔줌

```EJS
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <% for (i in ['사과', '배', '오렌지']) { %>
    <p>Welcome to <%= title %></p>
    <% } %>
  </body>
</html>
```

* 변수를 <%= %>로 감싼다


