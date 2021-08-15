// js를 실행할때 'use strict'; 를 맨 위에 써놓고 사용하자 비정상적인 동작을 방지해준다.  (ES5 기능)
'use strict';


// html에 자바스크립트 포함하는 방법

// 1. head에 <script>코드 사용하기
// <!DOCTYPE html>
// <html lang="ko">
//     <head>
//         <meta charset="UTF-8">
//         <title>Document</title>
//         <script src="practice.js"></scripts>
//     </head>
//     <body></body>
// </html>

{/* 순서 - parsing HTML / fetching js / executing js /parsing HTML
        js파일을 다운,실행할때까지  html을 읽어오는것(parsing)을 잠깐 멈춤
단점 - 사이트 내용이 엄청 크거나 사용자 인터넷 속도가 느릴 때 웹사이트를 볼떄까지 시간이 오래걸림 */}


{/* 2. body에 <script>코드 사용하기 */ }

// <!DOCTYPE html>
// <html lang="ko">
//     <head>
//         <meta charset="UTF-8">
//         <title>Document</title>
//     </head>
//     <body>
//         <script src="practice.js"></scripts>
//     </body>
// </html>

{/* 순서 - parsing HTML / fetching js / executing js
장점 - 기본적인 html을 빨리 볼수있다.
단점 - js에 의존성이 많은 사이트의 경우 자바스크립트가 다운,실행될때까지 이용상 문제가 있을수있다. */}


{/* 3 head에 async(불리언타입 속성값) 사용하기
parsing과 fetching js가 같이 시작된 후 parsing하다가 fetching이 끝나면 parsing을 멈추고(blocked) executing js 한 후에 다시 parsing하게된다. */}

// <!DOCTYPE html>
// <html lang="ko">
//     <head>
//         <meta charset="UTF-8">
//         <title>Document</title>
//         <script asyn src="practice.js"></scripts>
//     </head>
//     <body></body>
// </html>

{/* 순서
    parsing HTML /   blocked    / parsing HTML
    fetching js  / executing js

장점 - body에 사용하는 경우보다 js 다운받는 시간을 절약할수있다.

단점 - js가 parsing이 끝나기전에 실행되기 때문에 조금 위험할수있고 parsing하는 동안에 js를 실행하려고 parsing을 멈출수있기때문에 시간이 오래걸릴수 있다. */}


{/* 4. head에 defer 속성값 사용하기  ( *** 제일 효율적이고 안정적이다. *** )
parsing과 fetching이 같이 실행되고 parsing이 끝난 후에 executing js 된다. */}

// <!DOCTYPE html>
//     <html lang="ko">
//         <head>
//             <meta charset="UTF-8">
//             <title>Document</title>
//             <script defer src="practice.js"></scripts>
//         </head>
//         <body></body>
//     </html>

{/* 순서 
    parsing HTML   /   executing js
    fetching js
장점 - parsing이 끝난후에 js를 실행해서 속도 안전성 둘다 좋다. */}


{/* * async와 defer 차이점

async는 js가 어러개일 경우 다운로드 되는 순서대로 실행을 한다. (실행될때마다 parsing이 멈추는 단점)
defer는 js가 내가 위에 적은 순서대로 실행한다. */}
