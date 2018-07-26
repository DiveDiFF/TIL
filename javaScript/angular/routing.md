# Routing & Navigation

javaScript 의 SPA & Routing

1. 전통적 링크(a태그) 방식 : 화면을 rerendering 함 (완전한 HTML 문서를 링크해야함)
    - href: URL 서버에서 받아와 주소창에 넣어 새로운 HTML 파일을 열어 화면 전환
2. AJAX 방식 : 주소를 바꾸지 않고 직접 서버에 요청해서 해결
    - SEO가 떨어짐.
3. HASH 방식 : #마크를 사용해 서버에 요청 없이 화면 전환하게 하는 방식
    - 점점 coding이 복잡해짐
4. PJAX : 서버렌더링과 AJAX방식의 혼합
    - 진짜 복잡함

---

## SPA (single Page Application)

문제점
- 초기 구동속도가 느림
- SEO 문제

-> 웹 사이트와 구별되는 웹 애플리케이션이라는 관점에서 볼 때 리소스 다운로드가 초기 구동 시에 이뤄져 이후의 구동속도가 빠른 장점을 생각하면, 굳이 웹 사이트만큼 검색엔진이나 초기 구동속도를 걱정할 필요 없음

사용자의 요청 URL을 해석하고 애플리케이션의 뷰를 담당하는 컴포넌트와 연결하는 역할을 한다.

PathLocationStrategy VS HashLocationStrategy ??

- PathLocationStrategy으로 사용