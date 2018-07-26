# RxJS

## 1. 리액티브 프로그래밍

비동기 데이터 스트림에 기반을 둔 프로그래밍 패러다임

- 프로세스가 서버에 있는 데이터를 가져오는 기존 방식에서 벋어나(Pull Scenario), 서버에서 데이터 스트림을 방출하면 그것에 반응하여 데이터를 획득하는 것 (Push Scenario)

용어정리
- 옵저버블(Observable) : 데이터 생산자 (Data Producer)
- 옵저버(Observer) : 데이터 소비자 (Data Consumer
- 노티피케이션(Notification) : 옵저버블이 방출한 이벤트 또는 값
- 구독(Subcription) : 옵저버블과 옵저버의 관계를 지칭

## 2. 리액티브 프로그래밍의 특징

HTTP문제점 극복을 위해 프로미스, 프로미스의 문제점 극복을 위해 제너레이터 .......

모든 input을 옵져버블로 만든다. 해당 옵져버블을 배열과 유사한 메소드로 처리한다.
(시간축이 있는 배열과 같다고 이해하면 편함)

## HttpClient와 HTTP 통신

angular의 통신 방식.

Rest API
- Method : 행위 (get, post etc...)
- Resourse: URL ('/todos')

---

## cold observable
