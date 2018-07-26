# Aplication

## 어플리케이션 로딩 처리

```typescript
<ul>
  <ng-container *ngIf="todos"; else loading>
    <li *ngFor="let todo of todos">{{todo.content}}</li>
  </ng-container>
  <ng-template #loading>loading...</ng-template>
</ul>
```

> *ngIf ; else : if의 조건이 false일때 실행


index.html에
```typescript
<app-root> Loading ~~~ </app-root>

```
> app-root 로딩되면 해당 text는 삭제됨.

## Form

- 템플릿 드리븐 폼
- 리액티브 폼

### ngForm 디렉티브

루트 모듈에 FormsModule을 추가하면 NgForm 디렉티브를 선언하지 않아도 모든 form 요소에 NgForm 디렉티브가 자동으로 적용되어 템플릿 기반 폼으로 동작함.

특정 폼에서 NgForm 적용 배제하고 순수 HTML 폼으로 사용하고자 할때는
ngNoForm 적용

```HTML
<form ngNoForm></form>
```


