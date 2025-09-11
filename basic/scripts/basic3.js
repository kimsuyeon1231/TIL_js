// 1. 함수 대기 (생성한 상태)
function func1() {
    console.log('반복 실행 내용')
}
// 2. 함수 호출방법 (생성 밖)
func1 ();

//함수의 매개변수 활용
function storyFunc1 (day, data) {
    console.log(`매개변수 값 확인 : ${day, data}`)
    //헨젤, 그레텔 준비
    const person = ['헨젤','그레텔']
    //조약돌 준비
    //const src = '조약돌'
    //집 돌아간다 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    //1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다.`)
}
/* function storyFunc2 () {
    const person = ['헨젤','그레텔']
    const src = '빵부스러기'
    alert(`${person[0]}과 ${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`)
} */
/* storyFunc2 (); */
storyFunc1 (1); // 기본값 사용 시 매개변수 값 전달안함
storyFunc1 (2, '빵부스러기'); // 기본값 변경 시 매개변수 값 전달함
storyFunc1 (3, '쌀');

function coffeeFunc (menu, water, espr=1) {
    // ? 레시피
    // ? 컵 물을 채운다.
    // ? 샷 에스프레소를 넣는다.
    console.log(`${menu} 레시피`)
    console.log(`${water}컵 물을 채운다`)
    console.log(`${espr}샷 에스프레소를 넣는다`)    
}
coffeeFunc ('아메리카노', 2) /* 기본값 에스프레소 1샷 생략 */
coffeeFunc ('에스프레소', 0)

// 키오스크 주문 출력 (배열 활용법)
function kiosk_array (hotice, name, num) {
    const type = ['따뜻한','차가운']
    const menu = ['카페라떼','아메리카노','녹차라떼']
    console.log(`${type[hotice]} ${menu[name]} ${num}잔 주문완료되었습니다.`)
}
kiosk_array (0, 0, 2)
kiosk_array (1, 1, 1)
kiosk_array (0, 2, 2)
kiosk_array (1, 1, 1)

// 키오스크 주문 출력 (객체 활용법) - 문제
function kiosk_obj (hotice, name, num) {
    const coffeeMenu = {
        type: [hotice],
        menu: [name],
    }
        coffeeMenu.type[0] = '따뜻한'
        coffeeMenu.type[1] = '차가운'
        coffeeMenu.menu[0] = '카페라떼'
        coffeeMenu.menu[1] = '아메리카노'
        coffeeMenu.menu[2] = '녹차라떼'
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문완료되었습니다.`)
    }
kiosk_obj (1, 0, 2)
kiosk_obj (1, 1, 1)
kiosk_obj (0, 2, 2)
kiosk_obj (1, 1, 1)

// 키오스크 주문 출력 (객체 활용법) - 풀이
function kiosk_obj (hotice, name, num=1) {
    const coffeeMenu = {
        type: ['따뜻한','차가운'],
        menu: ['카페라떼','아메리카노','녹차라떼'],
    }
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문완료되었습니다.`)
    }
kiosk_obj (0, 0, 2)
kiosk_obj (1, 1)
kiosk_obj (0, 2, 2)
kiosk_obj (1, 1)

console.log('-------------------------------------리턴')
function plusFunc1(n1, n2) {
    let calc = `${n1} * ${n2} = ${n1*n2}, `/* 리턴 아래에 있는 내용은 읽지않는다. */
    calc += `${n1} + ${n2} = ${n1+n2}`/* 리턴 => 함수를 실행하는 부분에서 반환 시킬 거 다. 라는 뜻 */
    /* 문제1) 곱하기가 아닌 더하기만 나오는 문제 */
    //대입 연산자(=) 이전 변수 값을 제거하고 새로운 값을 대입\
    //이전 변수 값을 유지하고 새로운 값 추가 대입 연산자는? 복합대입연산자
    //calc = calc + `계산식`
    //cale += `계산식`
    return calc
}
/* function plusFunc2(n1, n2) {
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */
console.log(plusFunc1 (1, 2))
//alert(plusFunc1 (3, 4))

//구구단 함수 (2~9단까지)
//출력예시) 변수 x 변수 = 결과
function dan99Func(dan) {
    //구구단 식
    let dan99Total = '';
    dan99Total += `${dan} X 1 = ${dan*1},`
    dan99Total += `${dan} X 2 = ${dan*2},`
    dan99Total += `${dan} X 3 = ${dan*3},`
    dan99Total += `${dan} X 4 = ${dan*4},`
    dan99Total += `${dan} X 5 = ${dan*5},`
    dan99Total += `${dan} X 6 = ${dan*6},`
    dan99Total += `${dan} X 7 = ${dan*7},`
    dan99Total += `${dan} X 8 = ${dan*8},`
    dan99Total += `${dan} X 9 = ${dan*9},`
    return dan99Total /* 식이 리턴 아래 있지 않도록 리턴 위치 주의하기! */
}
console.log(dan99Func(7))
//alert(dan99Func())
//prompt(dan99Func())

// 할인율 계산기
// KB국민카드 5% 할인적용가 ?원 
// 현대카드 10% 할인적용가 ?원
// 삼성카드 20% 할인적용가 ?원

// 할인율 계산법 (100-할인율) / 100 = 0.95 (5%할인)
// 판매가 * 0.95
function cardFunc(cardType, discount) {
    const card = ['KB국민카드', '현대카드', '삼성카드'] //카드사 정보
    const price = 1051000; //원가
    const calc = (100 - discount) //할인율 계산\
    const totalprice = price * calc; //할인가 계산
    const result = `${card[cardType]} ${discount}% 할인적용가 ${totalprice.toLocaleString('ko-kr')}원`; //출력결과
    return result //반환결과
}
// 현대카드 10% 할인적용가 ?원
console.log(cardFunc(0,5))
console.log(cardFunc(1,10))
console.log(cardFunc(2,20))

// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user) {
    return alert('hello'+user)
}
//hello1('수연')

const hello2 = function(user){
    return alert('hello'+user)
}
//hello2 ('kim');

// 익명함수 + 화살표 함수 (ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('hello'+user)
}
//hello3('lee');