function naverLink() {
    window.open('https://naver.com', '_blank')
}
//naverLink()
const writeFunc = function() {
    return window.location.href('https://google.com')
}
//writeFunc();

//DOM
const btn = document.getElementsByTagName('button')
const div = document.getElementsByTagName('div')
console.log(btn, div);
btn[2].style.color = 'red';
btn[0].style.backgroundColor = 'yellow';
btn[0].style.border = '1px solid red';
div[1].style.transform = 'rotate(-5deg)';

//JS - HTML, CSS
//DOM.style.color; //읽기
//DOM.style.color = '값'; //수정
//객체.속성.속성
//객체.함수()

//클래스 선택하기
const slide = document.getElementsByClassName('slide')/* 띄어쓰기 및 _ 대신 띄어쓰기 쓸 부분에 대문자 사용 */
const slideWrap = document.getElementsByClassName('slide_wrap')
console.log(slide, slideWrap);
slide[0].style.backgroundColor = '#ff0';
slide[1].style.backgroundColor = 'rgba(0,0,0,0.1)';
slideWrap[0].style.border = '5px solid purple';
/* 태그와 클래스 DOM은 반드시 인덱스 붙여서 사용하기 */

//아이디 DOM
const container = document.getElementById('slide_container')
console.log(container)
container.style.backgroundColor = 'pink'
container.style.margin = '0 auto'
//아이디는 단 하나의 요소로 인덱스를 붙이지 않고 작성한다.
slide_container.style.filter = 'invert(1)';

//ES6 querySelector
const tag_es6 = document.querySelectorAll('div')
const cls_es6 = document.querySelectorAll('.slide')
const id_es6 = document.querySelector('#slide_containar')
console.log(tag_es6, cls_es6, id_es6)

// 메뉴 구조
const navMain = document.querySelector('#main')
const navGnb = document.querySelector('.gnb')
const navLi = document.querySelectorAll('.gnb > li')
const navLi_v2 = navGnb.querySelectorAll('li')
const navA = document.querySelectorAll('.gnb> li > a')
const navA_v2s = navLi[0].querySelectorAll('a')
console.log(navMain, navGnb, navLi, navLi_v2, navA, navA_v2s)
navGnb.style.display = 'flex'
navLi[2].style.transform = 'transform 0.3s linear 2s'
navGnb.style.fontsize= '2.0rem'
navA[0].style.animation = 'rotate360 1s alternate infinite'
//DOM 변수 사용 시 All 키워드 유무에 따라 [인덱스] 사용 주의하기!

//로그인 알고리즘
//버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘
const loginBtn = document.querySelector('#loginFrm button')
const loginId = document.querySelector('#id')
const loginName = document.querySelector('#name')
const loginPw = document.querySelector('#pw')
console.log(loginBtn, loginId, loginName, loginPw)
console.log(loginId.name);
console.log(loginId.type);
//객체.속성; //속성 읽기
//객체.속성.속성 = 대입값;
//이미지객체.src = '경로'
//loginId.type = 'password'/* 아이디 타입을 텍스트-> 패스워드로 변경 */
function userInfo(){
    //로그인 버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 콘솔 확인 알고리즘
    let data = loginId.value;/* value 인풋, 버튼 같은 폼 관련된 태그들에 사용 */
    data += loginPw.value;
    data += loginName.value;
    return console.log(data);
}
