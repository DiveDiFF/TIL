# git 사용하기

 1. github에 repo 생성
 2. git으로 repo명과 같은 폴더 생성
 3. git init
 4. git add {파일명}
 5. git status(중간중간 계속 확인)
 6. git commit (git commit -m "제목, 내용")
 7. git remote 로 연결 확인
 8. git remote {별명} {주소}
 9. git push {별명} {master} 
 
---
# git branch 사용하기

 1. 생성 : git branch {이름}   , git checkout -b {이름}
 2. 이동 : git checkout {이름}
 3. 병합 : git merge {이름} (master로 전환한 상태에서 {이름}을 master에 병합)
 4. 삭제 : git branch -D {이름}
 5. push 할때 master대신 {이름}으로 동기화
