# 29.REST API

Representational State Transfer

  javaScript와 sever 사이의 데이터를 주고 받는 중간에서 REST방식으로 보여지는 API


- GET 조회한다.
- POST 생성한다. (서버에 데이터베이스로)
- PUT 수정한다. (데이터 한 row를 전체 수정)
- PATCH 수정한다. (데이터 일부만 수정)
- DELETE 삭제한다. (데이터 row 삭제)

1. URI는 정보의 자원을 표현한다.
  - URI(경로에 특히) 동사를 쓰지 않는다. 정보의 자원만 표현
2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다.
  - 실제 자원에 대한 행위를 메소드 명으로 쓴다.