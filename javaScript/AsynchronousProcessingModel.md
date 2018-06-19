# 25. 동기식/비동기식 처리 모델

- 동기식 처리 모델은 서버에 데이터 요청 시 완료될 때까지 작업이 중단된다.(Blocking)
- 대부분의 코딩은 비동기식으로 처리하여 Blocking Time이 없도록 한다.

- setTimeout(function, time)