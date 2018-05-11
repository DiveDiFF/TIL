
# NETWORK

## Requirements of Network
- Network Cable
- Distributor(Switch Hub)
- Router
- Network card

## 커버범위에 따른 구분
> - LAN < MAN < WAN
> - wirelessLAN

802.11기술을 기반으로 만든 상품 -> wifi


  - wifi  a, b, g, n, ac (n이 가장 보편화 2.4Ghz, ac도 많이 씀. 연구활발)
  - Lifi(IEEE 802.15.7r1)
  - Power line Networking(IEEE 1901)

---
## NETWORK 구조 
  
   Star, Ring, Bus, Tree, Line 등등 

---
## Ethernet
- 전세계의 사무실이나 가정에서 일반적으로 사용되는 유선 LAN에서 가장 많이 활용되는 기술 규격
- ether == 에테르 == 빛의 매질
- IEEE 802.3 규약 기반
- OSI 7 Layer에서 Data-link Layer 에 위치

## Packet
- 데이터를 한번에 전송할 단위로 자른 데이터의 묶음 혹은 그 크기
- 1492 ~ 1500 bytes(프로토콜에 따라 다름)
- 네트워크에서는 바이트(byte)라는 표현 대신 옥텟(octet)으로 표현

---
## Network OSI 7 layer
- `O`pen `S`ystems `I`nterconnection Reference Model
- 국제 표준화기구에서 개발한 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것

---
### 7. Application Layer : 사용자에게 보이는 부분, 브라우저
### 6. Presentation Layer : 사용자가 사용하는 문자체계에 따라 인코딩
 - Utf-8 : 웹표준, 유니코드 : 파이선
### 5. Session Layer : 연결을 담당. 사용자가 쓰지 않으면 연결 종료
 - 세션은 서버쪽에서 관리하는 것 (server side)
 - 쿠키는 사이트 접속, 입력 등을 브라우저로 관리 (client side)
### 4. Transport Layer : 패킷으로 나눠서 해더에 순서 정보를 붙여서 전송, 재조립 등
### 3. Network Layer : 라우팅
### 2. Datalink Layer : 엄청 작은 소규모 간이역 정도가 브리지와 스위치
### 1. Physical Layer : 전원, 네트워크케이블 등 물리적 장비

---

## HTTP
HyperText Transfer Protocol

- www상에서 정보를 주고받는 프로토콜
- TCP, UDP를 활용함
- HTTP method: GET, POST, PUT, DELETE

---
## FTP
File Transfer Protocol
- 서버와 클라이언트 사이에 파일전송을 위한 프로토콜
- but, 보안에 매우 취약(패킷 가로채기, 무차별 대입, ...)
- 현재는 FTPS(FTP-SSL), SFTP(simple FTP), SSH(Secure SHell) 등을 사용

---
## SMTP
Simple Mail Transfer Protocol
- Internet에서 메일을 보내기 위한 프로토콜

---
## TCP/IP
Transmission Control Protocol / Internet Protocol
- 전송제어 프로토콜 + 송수신 호스트의 패킷교환을 위한 프로토콜
 
 *Protocol : 규약, 약속

	Application : 7,6,5 Layer 
	  - Application, Presentation, Sesseion
	Transport : 4 Layer
	  - Transport
	Internet : 3 Layer
	  - Network
	Network Interface : 1, 2 Layer
      - Datalink, Physical콜

---
## TCP
- 전송제어프로토콜 / Transmission(Transfer) Control Protocol
- 근거리 통신망이나 인트라넷, 인터넷에 연결된 컴퓨터에서 실행되는 프로그램 간에 일련의 옥텟(==byte)을 안정적으로, 순서대로, 에러없이 교환할 수 있게 함
- TCP -> STREAM, UDP -> DATAGRAM

---
### STREAM
- 문자형식의 데이터가 열의 형태로 연속성을 띄게 됨 : 안정적

### DATAGRAM
- 하나의 패킷이 발신지와 수신지 정보를 모두 담고 있는 독립적인 패킷 : 실시간

---
## IP
## IPv4	- 32bit로 구성
   127.0.0.1 vs 192.168.0.x

     >  127.0.0.1
     
        - Loopback: 컴퓨터가 가지고 있는 무조건 반대신호를 반환하는 대역
        - Localhost

     > 192.168.0.x

        - LAN에서 라우터가 할당한 내컴퓨터의 IP address (Private)
            <-> Globally Unique IP (public)


## IPv6 - 128bit로 구성
  - IPv4의 고갈상태로 인해 개발, IoT에 맞춰 광범위하게 설계
---

---
# Web Programming

---
## Web Browser

---
#### Mosaic(1993)
#### Netscape Navigator(1994)
#### Internet Explorer(1995)
#### FireFox(2004)
#### Chrome(2008)
#### PWA in Chrome Dev Summit 2017
[schedule](https://developer.chrome.com/devsummit/schedule)
<iframe width="640" height="360" src="https://www.youtube.com/embed/_sLa0qhuqcA" frameborder="0" allowfullscreen></iframe>

---
# javaScript

---
## Client-side
- HTML/CSS, javaScript
- jQuery, AJAX
- Front-end Web Framework
	- Angular
	- React.js
	- Vue.js
- CSS Framework
	- Bootstrap
	- Foundation

---
## Server-side
- Depends on Language
	- PHP: Laravel
	- javaScript: Node.js(Express.js)
	- Java: Spring
	- C++, C#: ASP.net
	- Python: Django, Flask
	- Golang: itself
	- Ruby: Ruby on Rails

---
## Database
- RDBMS
	- MySQL
	- PostgreSQL
	- MariaDB
- noSQL
	- MongoDB
	- CouchDB
	- Redis


---
## etc
- celery (for Distributed Task Queue)
- github, Bitbucket, gitlab (for SCM)
- travis CI or jenkins (for Continuous Integration)
- slack, trello


---
## URI, URL, URN

### URI 
- Uniform Resource Information
- `https://www.example.com/post/how-to-make-url`
### URL 
- Uniform Resource Locator
- `https://www.example.com/post/`

### URN 
- Uniform Resource Name
- `www.example.com/post/how-to-make-url`