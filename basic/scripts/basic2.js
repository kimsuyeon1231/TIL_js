// 1일차 복습 (가계부앱 변수생성과 출력)
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
// 결과) 오늘 총 지출액은 0000원입니다.

let coffee = 1500;
let lunch_box = 6000;
let bus = 3000;
let total = coffee + lunch_box + bus; //최종 출력을 단순하게 처리하기 위해 토탈값 변수를 만듬
//console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원 입니다.`);
//console.log(`오늘 총 지출액은 ${(coffee+lunch_box+bus).toLocaleString('ko-kr')}원 입니다.`);
//숫자에 3자리 간격 콤마(,) 표시하기
//10000 숫자
// 10,000 문자 (최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.tolocalestring('ko-kr');

//문자데이터 연습
//리뷰 작성 기준 50자 이상
//콘솔 출력) 현재 작성 리뷰 글자 수는 000자 입니다.
//let review = prompt('리뷰를 작성하세요');
//console.log(review);
//객체.함수();
//객체.속성;
//글자 수 체크 속성 length
//let review_length = review.length;
//console.log(`현재 작성 글자 수는 ${review_length}자 입니다.`)

//오브젝트형 데이터 - 객체
//변수생성 키워드 변수명 = {키:값, 키:값, 키:값 ...}
let rectagle = {
    width:300,
    height:200,
    x:0,
    y:-100,
}
console.log (`${rectagle.width}px,${rectagle.height}px`);

let user_info = { //회원정보
    name:'가을',
    age: 3,
    gender:'female',
    area:`서울`
};
let product = {//쇼핑몰
    name:`마스크`,
    price:1000,
    quantity:999,
    color:'white'
};
let movie_theater ={//영화관
    name:'vip',
    position:'f1',
    price:14500
};
//상품명 : 마스크(white)
// 상품가 : 1000원
//수량 : 999개
console.log (`상품명 : ${product.name}(${product.color})`)
console.log (`상품가 : ${product.price.toLocaleString('ko-kr')}원`)
console.log (`수량 : ${product.quantity.toLocaleString('ko-kr')}개`)

//오브젝트 데이터 타입2 배열
//변수생성키워드 변수명 = [배열값, 값2, 값3]
//변수생성키워드 변수명 = new Array(값, 값, 값)
//변수생성키워드 변수명 = new Array(자리값)
const yoil = ['월','화','수','목','금','토','일']
console.log(yoil)
console.log(`오늘은 ${yoil[2]}요일`)//오늘은 수요일

const en = new Array('a','b','c','d','e','f');
console.log(en, en[0], en.length);

const year = new Array(4);
year[0] = 2025
year[1] = 2024
year[2] = 2023
year[3] = 2022
console.log(year);

// 좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기
const f_color = ['black','blue','Gray','red','silver','skyblue']
console.log (f_color[1],f_color[5]);
// 좋아하는 과일을 5개 배열로 저장하고 역순으로 모두 출력하기
const fruit = new Array('복숭아','파인애플','청사과','수박','오렌지')
console.log (fruit[4]);
console.log (fruit[3]);
console.log (fruit[2]);
console.log (fruit[1]);
console.log (fruit[0]);

//Q3. 요일-날씨정보 출력
// 월 - 맑음
// 화 - 비
// 수 - 흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 흐림
const weather = ['맑음','비','흐림']
const day = ['월','화','수','목','금','토','일']
console.log (`${day[0]} - ${weather[0]}`);
console.log (`${day[1]} - ${weather[1]}`);
console.log (`${day[2]} - ${weather[2]}`);
console.log (`${day[3]} - ${weather[0]}`);
console.log (`${day[4]} - ${weather[0]}`);
console.log (`${day[5]} - ${weather[1]}`);
console.log (`${day[6]} - ${weather[2]}`);

const megabox = new Array(8) //빈좌석 준비
megabox [0] = 'A1'
megabox [1] = 'A2'
console.log(`현재 예매 좌석 : ${megabox[0]},${megabox[1]}`);
megabox [0] = 'null'
megabox [1] = 'null'
console.log(`현재 예매 좌석 : ${megabox[0]}, ${megabox[1]}`);

//cgv 좌석 예매와 취소
const cgv = [] //빈 배열 준비
console.log(cgv.length)
//좌석 A1 선택
cgv.push('A1')
console.log(cgv);
cgv.push('A2')
console.log(cgv);
cgv.pop('A2')
console.log(cgv);
cgv.shift('A1');
cgv.push('A2')
console.log(cgv);
cgv.unshift('A2');
console.log(cgv);
console.log(cgv.length >= 8)
//선택 좌석이 8개일때 좌석 추가 금지
const price = 11000
//출력결과예시
// 선택 좌석 수 : 00 
// 총 결제 금액 : 0000원
cgv.push('A1')
cgv.push('B1')
cgv.push('B2')
cgv.push('C1')
cgv.push('C2')
cgv.push('D1')
let cgv_length = cgv.length;
let cgv_total_price = (cgv_length*price).toLocaleString('ko-kr');
console.log(`선택 좌석 수 : ${cgv_length}`)
console.log(`총 결제 금액 : ${cgv_total_price}원`)

console.log ('--------------------------------------------------')

//연산자 연습
// 1. 산술연산자
let num1 = 5;
let num2 = 2;
console.log(num1 + num2)
result = num1 - num2
console.log(result)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

//Q. 이항 연산자 활용 두 수를 사용자에게 입력받고 입력받은 값 활용 더하기만 되는 계산기 만들기
//const firstNum = Number(prompt('첫번째 수'));
//const lastNum = Number(prompt('두번째 수'));
const firstNum = 2
const lastNum = 2
console.log (firstNum,lastNum);
console.log (`${firstNum} * ${lastNum} = ${firstNum*lastNum}`);

console.log ('--------------------------------------------------')
// 증감연산자
let x =5;
let y =0;
console.log (x, y); // 5 0
y = x++;
console.log (x, y); // 6 5 
x = ++y;
console.log (x, y); // 6 6
x++;
--y;
console.log (x, y); // 7 5

let a = 10;
let b = 20;
let c = 30;
let d = 40;
//a=10, b=20, c=30, d=40
a++
b--
c++
d--
//a=11, b=19, c=31, d=39
console.log(a,b,c,d);
a = ++b
b = a++
//a=21, b=20, c=31, d=39
console.log(a,b,c,d);
c = a+b
d = ++c
//a=21, b=20, c=41, d=42
console.log(a,b,c,d);
a = ++c + 10
b = --d + 1
//a=52, b=42, c=43, d=41
console.log(a,b,c,d);

console.log ('--------------------------------------------------')

//연산자 3. 복합대입연산자★
let number = 10;
//number = number + 5;
number += 5; //위에껄 단축한 거
console.log(number); 
number -= 10;
console.log(number); 
number *= 10;
console.log(number); 
number /= 2;
console.log(number); 
number %= 3;
console.log(number); 

console.log ('--------------------------------------------------')
//함수
//1. 내장함수
//prompt('함수는?');
//alert('함수는?');
//print();
//2. 사용자정의함수
//function 함수명(인자){반복구문}
//Q1. html, css, js 반복출력
let lang1 = ''
let lang2 = ''
let lang3 = ''
function study_lang(){
    lang1 = 'html'
    lang2 = 'css'
    lang3 = 'javascript'
    console.log(`배운언어 : ${lang1+lang2+lang3}`);
}
study_lang();//* 함수 호출상태 */
/* 함수는 생성(대기)과 호출을 별개로 취급한다. */
console.log(lang1, lang2, lang3);
lang2 = lang2 + '3'
console.log(lang2);

console.log('지역변수와 전역변수')
let xx = 1;
let yy = 0;

function func1(){
    yy =5;
    console.log(xx+yy)
}
function func2(){
    let zz =10;
    console.log(xx+yy+zz)
}
func1()
func2()