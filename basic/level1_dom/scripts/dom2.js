//dom2. js
//1. 변수 section*2, a*2, btn*2 (동적대상 체크 후 변수 생성)
const sectionTag = document.querySelectorAll ('section')
const linkCls = document.querySelectorAll ('section .link')
const btnTag = document.querySelectorAll ('section .btn')
console.log (btnTag, linkCls, sectionTag[0], sectionTag.length)

//2. 이벤트와 함수, 속성
//초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0';
sectionTag[1].style.backgroundColor = '#0cf';
//이벤트, 함수 추가 생성
//a2 클릭 시 section[1] 배경색 변경
//a 태그에 클릭, 터치 이벤트 적용 시 href 속성때문에 스크롤이 위로 올라가는 문제 발생 -> a 기본속성기능 해제 preventDefault()
/* linkCls[1].addEventListener('click', bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#ffc';
} */
/* linkCls[1].addEventListener('click', function(event) {
    console.log(event)
    event.preventDefault();
    sectionTag[1].style.backgroundColor = '#ffc'
}) */
linkCls[1].addEventListener('click',(e)=>{
    e.preventDefault();
    sectionTag[1].style.backgroundColor ='#ffc'
})
linkCls[0].addEventListener('click', function(event){
    event.preventDefault();
    linkCls[0].style.backgroundColor ='#fff'
})
//a, button(type=button)
// button 이용 JS 진행 시 특정 페이지 이동이 필요할 때 location.href 를 사용한다 (예)로그인 성공 시 메인페이지로 이동)
//JS 상대경로 작성은 html 위치 기준으로 작성한다.
/* btnTag[0].addEventListener('click',()=>{
    window.location.href='../sass_study/project2/index.html'
})
btnTag[1].addEventListener('click',()=>{
    window.location.href='./dom1.html'
}) */
btnTag[0].addEventListener('click', sassProjectFunc)//project1/index
btnTag[1].addEventListener('click', sassProjectFunc)//project1/index
function sassProjectFunc(src){/* 함수 내에서 각기 다른 주소를 쓰는 방법 */
    return function(){
        location.href = `../sass_study/${src}/index.html`/* 윈도우는 생략 가능 */
    }
}
//쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceCls = document.querySelector('#numFrm .price em')
let count =1 ; // 초기값 변수
let price =12900
console.log(inputNum, plusBtn, minusBtn)
//div.innerHtml (읽기전용태그일때 수정이 필요하다면)
//input.value (읽기,쓰기 동시에 되는 태그 input)
//수량이 1로 시작해서 + 클릭하면 수량 증가, - 클릭하면 수량 감소
//1개당 가격 12900원
//초기값
inputNum.value = count;
priceCls.textContent = price.toLocaleString('ko-kr');
//이벤트, 함수
// + 클릭하면 수량 증가
/* 대입연산자(=)는 오른쪽 우선 적용 */
plusBtn.addEventListener('click', plusFunc)
priceCls.addEventListener('click', plusFunc)
minusBtn.addEventListener('click', minusFunc)
priceCls.addEventListener('click', minusFunc)
function plusFunc() {
    inputNum.value = ++count; // 증감연산자를 뒤로 보내면 연산 진행 후 증가되기 때문에 앞에다가 입력, 숫자 증가 후 연산진행
    let totalprice = price * count 
    return priceCls.textContent = totalprice.toLocaleString('ko-kr')
    /*다른방법 priceCls.textContent = (price * count).toLocaleString('ko-kr');*/
}
function minusFunc() {
    inputNum.value = --count;
    let totalprice = price * count 
    return priceCls.textContent = totalprice.toLocaleString('ko-kr')
}
