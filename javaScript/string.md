# 21. String

type string은 s가 소문자, 객체 String은 생성자 함수로 대문자

기본자료형 중 string number boolean만 생성자 함수가 있어서 객체처럼 사용할 수 있음

## String Property

- 기본자료형인 string이 .property를 만나면 객체형으로 순간적으로 변환됨

### length
- ASCII code (8bit) : 2에 8승 256개의 데이터를 가짐, 영어만 가능
- UNI code : javascript는 UNI code를 사용해서 영어, 한글 등 모든 언어의 한 글자당 length 1을 가짐

### method
- string 객체의 모든 메소드는 *언제나 새로운 문자열* 을 반환함

- str.charAt(number) = str[number]
- str.concat(name) = str + name
- str.replace(서칭문자, 바꿀문자)
  - 서칭문자 : 정규표현식(g i), 스트링 가능
  - 바꿀문자 : 스트링
- str.split(' ') : 공백으로 단어를 구분하여 배열로 반환
- str.substring(시작위치, 끝위치(이 위치 앞까지 자름))