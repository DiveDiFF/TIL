# LifeCycle

ngOnChanges : @input 프로퍼티로 전달받은 부모 컨포넌트의 데이터의 값이 바뀌었을 때 단 한번만 동작, 프로퍼티의 참조가 바뀔 때만 동작함

ngOnInit : 모든 프로퍼티의 초기화가 완료. 입력프로퍼티 포함
OnInit 인터페이스에 저장된 메소드

다른 것들도 비슷한 구조임. OnChanges 인터페이스에 ngOnChanges 메소드를 가짐

일단 클래스를 생성해야 하니까 constructor가 최우선 실행

즉, constructor에서 입력 프로퍼티를 바라보면 언제나 undefined