const inputTag = document.querySelectorAll('input') 
const buttonTag = document.querySelectorAll('button')
console.log (inputTag, buttonTag)
console.log (inputTag[0], buttonTag[0])
console.log (inputTag[1], buttonTag[1])
console.log (inputTag.length, buttonTag.length)

const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('#search_btn')
const countInput = document.querySelector('input#num')
const counthBtn = document.querySelector('#cart_btn')
/* const searchInput = document.querySelector('#s')
const searchInput = document.querySelector('input[name*=s]')
const searchInput = document.querySelector('section:first-child input') */
console.log (searchInput, countInput, searchBtn, counthBtn) // querySelectorAll이 아니므로 [인덱스] 사용금지

/* 태그 속성★, 함수 테스트 (함수는 오래걸리는 번거로움이 있어서 속성으로 많이 사용) */
console.log(searchInput.type, searchInput.placeholder) //속성 읽기
console.log() //속성을 변경하려면 콘솔 밖으로 작성
/* searchInput.placeholder () 괄호는 함수일 때 사용한다  */
searchInput.placeholder =  "" //속성일때
let checkValue = '' ; // 빈 값 초기화
searchInput.value = '인기검색어 : HTML'; //value 값 변경
checkValue = searchInput.value; //변경값 변수 담기
console.log(checkValue) // 출력 확인

console.log(countInput.type)
console.log(typeof(countInput.value))
checkValue = Number(countInput.value)+1
console.log(`주문수량 : ${checkValue}`)

searchBtn.style.background = '#ddd';
searchBtn.style.height = '40px';
searchBtn.style.width = '150px';
searchBtn.style.margin = '0 0 30px';
counthBtn.style.background = '#ddd';
counthBtn.style.height = '40px';
counthBtn.style.width = '150px';
searchInput.style.border = '1px solid #000';
searchInput.style.width = '300px';
searchInput.style.height = '40px';
countInput.style.border = '1px solid #000';
countInput.style.height = '40px';


//이벤트 활용 콜백함수 호출
//이벤트 문법
//객체.addEventListener('이벤트종류', 콜백함수)
const orderBtn = document.querySelector('#order')
const cartBtn =document.querySelector('#cart')
console.log (orderBtn, cartBtn);

//주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
//이벤트 뒤 함수 장석방식 ; 콜백함수 호출(추천), 익명함수
/* orderBtn.addEventListener('click', function() {
    alert('상품을 선택하세요')
}) */
orderBtn.addEventListener('click', orederFunc_v2('상품'))
//이벤트 뒤 콜백함수는 함수 그 자체를 호출하는 개념으로 결과값만 받고 수정값은 따로 전달하지 않는다.
//매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표함수 추가 제작으로 수정가능한 함수로 재작성하는게 일반적인 방법이다.
/* orderBtn.addEventListener('click', function(){
    orederFunc('장바구니에')
})
* or *
orderBtn.addEventListener('click',()=>{
    orederFunc('장바구니에')
})
cartBtn.addEventListener('click',()=>{
    orederFunc('상품을')
})
function orederFunc (data) {
    return alert(data+' 담으세요')
} */
function orederFunc_v2 (data) {
    return function(){/* 클로저(Closure)-함수 안에서 함수를 처리 */
        // 내부 함수는 외부 함수의 매개변수를 기억한다.
        alert(data+' 담으세요')
    }
}

//주문하기 클릭 시 '장바구니에 담으세요'
//장바구니 클릭 시 ' 상품을 담으세요'
//콜백함수 1개만 활용 각각 DOM 이벤트 클릭 시 다른 메세지 출력하기


//아이디, 비밀번호 중복확인 클릭 시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//1. 제어 DOM 대상 변수 등록
const idOverlapBtn = document.querySelector ('#id')
const pwOverlapBtn = document.querySelector ('#pw')
console.log(idOverlapBtn, pwOverlapBtn)
//2. "클릭 시" 이벤트 콜백함수 제작
idOverlapBtn.addEventListener('click',()=>{overlapFunc('아이디')})
pwOverlapBtn.addEventListener('click',overlapFunc_v2('비밀번호'))
//3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작
function overlapFunc(msg){
    return alert (msg+'가 중복되었습니다')
}
function overlapFunc_v2(msg){
    return function(){
        alert (msg+'가 중복되었습니다')
    }
}
//3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
//4. 3번 콜백함수를 2번 이벤트에서 호출


//이벤트 콜백함수 연습
//Q1. textarea 값을 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
//Q2. textarea 를 활성화했을 때 테두리 빨강색
//Q3. textarea 를 비활성화했을 때 테두리 회색
const textReview = document.querySelector ('#review')
console.log (textReview)
textReview.addEventListener('keydown', reviewFunc)
function reviewFunc(){
    return console.log ('50자 이상 입력하세요')
}
textReview.addEventListener('focus',()=>{reviewFunc_2('#f00')})
textReview.addEventListener('blur',()=>{reviewFunc_2('#aaa')})
function reviewFunc_2(color) {
    return textReview.style.border = `1px solid ${color}`
}
reviewFunc_2('#aaa')//초기값
//textReview.style.border = '1px solid #aaa' //초기값
textReview.style.outline = 'none'

//배경버튼에 마우스 올리면 부모 article 배경색 변경하기
const articleTag = document.querySelector('article');
const bgBtn = document.querySelectorAll('article>button');
const bgP = articleTag.querySelector('p')
console.log(articleTag, bgBtn, bgP)
//bgP.textContent = '현재<br>배경색상 : #eee'
bgBtn[0].addEventListener('mouseover', bgChangeFunc('#ffc'))
bgBtn[1].addEventListener('mouseover', bgChangeFunc('#fdf'))
bgBtn[2].addEventListener('mouseover', bgChangeFunc('#fda'))
function bgChangeFunc(color) {
    return function () {
        articleTag.style.backgroundColor = color;
        bgP.textContent =`현재 배경색상 : ${color}`
    }
}
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
