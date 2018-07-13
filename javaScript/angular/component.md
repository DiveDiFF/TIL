# component

M-V-C, M-V-VM(CBD방식과 가장 유사)

- 모델(Model) : 데이터 형식, 비즈니스 로직, 유효성 검사 로직 및 그 외의 다양한 기능을 포함할 수 있음
- 뷰(View) : 사용자에게 모델을 표시하는 것, 같은 모델도 다양한 방식으로 표현 가능
- 컨트롤러(Controller) : 모델과 뷰의 상호작용을 감시하고 업데이트
- 뷰모델(ViewModel)
  - MVC 패턴 - 컨트롤러가 모델과 뷰 간의 상호 작용을 담당
  - MVVM 패턴 - 해당 뷰가 데이터 바인딩을 통해 컨트롤러의 역할을 담당한다.

컴포넌트는 데이터바인딩 방식으로 템플릿과 클래스를 상호작용하게 한다.

Angular의 뷰와 모델

DOM  <-- 상태, 업데이트 -->  View(Template)  <-- 데이터 바인딩 -->  Model

- 상태 : DOM의 변화(이벤트)를 캐치하기 위해 정보를 보내는 것

```HTML
<input type="text" value="Hello">
```
> HTML attribute로서 value("Hello")는 input태그의 초기값을 의미하며, 해당 DOM객체의 Attributes 프로퍼티에 저장, input태그에 사용자가 값을 입력하면 value는 변경되는데 이때는 attributes 프로퍼티의 value가 변하는게 아니라 DOM객체 내에 attributes의 형제 프로퍼티로 있는 또다른 value 프로퍼티의 값이 변경됨.

---

## Data Binding

1. 정의
- Angular는 DOM에 직접 접근하지 않고 템플릿과 컴포넌트 클래스의 상호 관계를 선언하는 방식(선언형 프로그래밍: Declarative programming)으로 뷰와 모델의 관계를 관리한다.
- 이때 사용되는 것이 데이터 바인딩이며 이를 통해 템플릿과 컴포넌트 클래스는 연결된다.
- 데이터 바인딩은 템플릿 문법으로 기술된다.
- HTML과 템플릿 문법으로 기술된 템플릿은 JIT 또는 AOT 컴파일러에 의해 브라우저가 이해할 수 있는 자바스크립트로 컴파일된다.

2. 변화 감지
- zone.js 라이브러리를 이용하여 변화감지
3. 데이터 바인딩 종류
    1. 인터폴레이션(Interpolation)
        - 문자열화 하여 표시한다.
        - {{ 표현식:하나의 값으로 수렴 }}
        - *[innerHTML]="expression" 의 문법적 설탕*
    2. 프로퍼티 바인딩(Property Binding)
        - *[property]="expression"*
        - 프로퍼티는 모든 값을 가질 수 있음
    3. 어트리뷰트 바인딩(Attribute Binding)
        - HTML attribute 자체를 바꿈
        - attributes 프로퍼티가진 attribute요소들에 접근
        - *[attr.attribute-name]="expression"*
    4. 클래스 바인딩(Class Binding)
        - *[class.class-name]="booleanExpression" or [class]="class-name-list"*
        - `true` : 클래스네임 추가, `false` : 삭제, 기존에 같은 이름의 클래스네임이 있으면 그것도 삭제
        - 후자의 방식은 기존의 클래스네임을 다 지우고 대체한다.-> 다항클래스 바인딩
        - 클래스 바인딩은 단항클래스 바인딩으로만 사용, 다항클래스 바인딩은 ngClass 디렉티브를 사용
    5. 스타일 바인딩(Style Binding)
        - *[style.style-property]="expression"*
        - 단위가 필요한 프로퍼티 값은 [style.style-property.단위] 로 쓴다.
        - 카멜케이스로 써도 됨 `font-size(케밥케이스)` or `fontSize(카멜케이스)`
    6. 이벤트 바인딩(Event Binding)
        - *(event)="statement"*
        - 이벤트객체는 $event로 본다. addEventLisner(function(\$event) {})
    7. 양방향 바인딩(Two-way data binding)
        - *[(ngModel)]="property"*
        - []프로퍼티 바인딩 + ()이벤트 바인딩 을 합쳐놓은 축약 표현
        - root module에 import 하고, 데코레이터의 import에도 추가해야함
        - forms에서 더 자세히 배워야함

---

## Built-in directive

디렉티브(Directive / 지시자): “DOM의 모든 것(모양이나 동작 등)을 관리하기 위한 지시(명령)

1. ngClass
    - *[ngClass]="문자열\ |\ 배열\ |\ 객체"*
    - 문자열 or 배열 or 객체를 HTML요소의 어트리뷰트에 반영
    - 다항 클래스 바인딩에 사용
    - 클래스 바인딩은 무조건 스트링을 줘야하는 것에 반해 배열, 객체를 줄 수 있음
2. ngStyle
    - *[ngStyle]="객체"*
    - HTML의 style attribute를 변경

빌트인 구조 디렉티브(Built-in structural directive) : 돔 트리 구조에 접근하여 반복 생성, 추가, 삭제 수행
  - *접두사로 시작하며 [] 사용 안함

1. ngIf
    - **ngIf="expression"*
    - 조건에 따라 DOM 상에서 추가/삭제
2. ngFor
    - **ngFor="let item of items; let i=index; let odd=odd; trackBy: trackById"*
3. ngSwitch
    - 잘 안씀

---

## component간의 상태 공유

컴포넌트 템플릿에 \<component-name>\</component-name>를 넣어서 관계 설정


부모 컴포넌트에 있는 프로퍼티를 자식 컴포넌트가 쓰려면 프로퍼티 바인딩
- 부:프로퍼티바인딩, 자:@Input
자식 컴포넌트에서 부모 컴포넌트에 실행을 요청하려면 이벤트 바인딩
- 부:이벤트바인딩, @Output, EventEmitter

### stateful 컴포넌트와 Stateless 컴포넌트

stateful 컴포넌트 : 스마트 컴포넌트

---

## PIPE

원하는 형식으로 화면에 표시하기 위한 빌트인 파이프와 커스텀 파이프 제작 가능


```angular
{{ value | PipeName }}
<!-- parameter -->
{{ value | PipeName : Option : OptionValue }}
<!-- chainning -->
{{ value | PipeName1 | PipeName2 }}
```

- Built-in Pipe
- Custom Pipe