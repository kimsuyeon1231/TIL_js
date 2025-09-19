// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기 😊-로그인필요
// 1. 상품 이미지에 마우스 이벤트 시 큰상품 이미지 변경
// 2. 😊저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격정보 (i) 클릭 시 정보 팝업 출력 / 숨기기
// 5. 주문 목록 초기 숨기기
// 6. 사이즈 select 초기 비활성화 (색상 선택 시 활성화)
// 7. 색상-> 사이즈 모두 선택 시 주문목록 출력 (선택한 값이 출력, 주문금액 변경) 
// 8. 주문목록 'X' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 수량+금액 표시
// 10. 주문목록 - 클릭 시 주문수량+주문금액 감소(1 이라면 경고창 출력)
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12. 😊(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
//---------------------------------------------------
// 1. 상품 이미지에 마우스 이벤트 시 큰상품 이미지 변경
// 변수 -> 초기값 -> 이벤트 -> 함수
const thumnailA = document.querySelectorAll ('.thumnail a')
const thumnailOverView = document.querySelector ('.overview img')

console.log (thumnailA, thumnailOverView)

//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정 (초기값)
thumnailA[0].children[0].style.transition = 'transform 0.3s'
thumnailA[1].children[0].style.transition = 'transform 0.3s'

thumnailA[0].style.border = '2px solid #0aa5ff'

//두번째 썸네일에 마우스를 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기
// 콘솔테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
// 콘솔테스트 권장 2) 큰 이미지 경로 출력하기
console.log(thumnailA[1].children[0].src)
console.log(thumnailOverView.src)

thumnailA[0].addEventListener ('mouseover', ()=>{
    //테두리 활성화/비활성화
    thumnailA[1].style.border = '0'
    thumnailA[0].style.border = '2px solid #0aa5ff'
    //이미지 확대
    thumnailA[1].children[0].style.transform = 'scale(1)'
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    //이미지 변경
    thumnailOverView.src = thumnailA[1].children[0].src
    
})
thumnailA[1].addEventListener ('mouseover', ()=>{
    thumnailA[0].style.border = '0'
    thumnailA[1].style.border = '2px solid #0aa5ff'
    thumnailA[0].children[0].style.transform = 'scale(1)'
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    thumnailOverView.src = thumnailA[1].children[0].src
})
//로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin', 'true')

// 2. 😊저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
const bookMark = document.querySelector ('.scrap')
let loginStatus = '';
console.log (bookMark)
//로그인 시 wish.html 이동
bookMark.addEventListener('click',()=>{

    loginStatus = localStorage.getItem('isLogin')
    if(loginStatus == 'true'){
        location.href = '../wish.html'
    }else{
        location.href = '../login.html'
    }
})

// 3. 리뷰 클릭 시 스크롤 이동
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('main > .product_info')
console.log (reviewBtn, reviewWrap,productWrap,productInfoBtn)

/* reviewBtn[0].addEventListener('click',(e)=>{
    //스크롤 이동 window 함수 scrollTo (x,y)
    e.preventDefault()
    console.log(reviewWrap.offsetTop)
    window.scrollTo(0,reviewWrap.offsetTop) //리뷰위치의 위쪽 좌표값 확인하기
})

reviewBtn[1].addEventListener('click',(e)=>{
    //스크롤 이동 window 함수 scrollTo (x,y)
    e.preventDefault()
    console.log(reviewWrap.offsetTop)
    window.scrollTo(0,reviewWrap.offsetTop)
})
productInfoBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo(0,productWrap.offsetTop)
})
*/

//이동 한번에 만들기
reviewBtn[0].addEventListener('click', (e)=>{e.preventDefault(); contentspstFunc(reviewWrap)})
reviewBtn[1].addEventListener('click', (e)=>{e.preventDefault(); contentspstFunc(reviewWrap)})
productInfoBtn.addEventListener('click', (e)=>{e.preventDefault(); contentspstFunc(productWrap)})

function contentspstFunc(target){
    return window.scrollTo(0, target.offsetTop)
}
/* function reviewBtnFunc(taget){
window.scrollTo(0,taget.offsetTop)
} */

// 4. 가격정보 (i) 클릭 시 정보 팝업 출력 / 숨기기
const priceInfoBtn = document.querySelector ('.info_icon')
const priceInfo= document.querySelector ('.price_info > span')
console.log (priceInfo, priceInfoBtn)

// 가격정보(i) 클릭 시 정보 팝업 출력
// 초기 : 숨김(false)
// 클릭 : 보이기(true)->false->true->false->true...

let infoBoolean = false; //초기 : 숨김(false)

priceInfoBtn.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭할때마다 값 (infoBoolean)반전
    infoBoolean = !infoBoolean;
    console.log(infoBoolean)
    //infoBoolean != false;
    if(infoBoolean){ //비교 연산자를 안쓰면 ()조건이 참일때로 자동실행된다
        priceInfo.style.display = 'block'
    }else{
        priceInfo.style.display = 'none'
    }
})
// 5. 주문 목록 초기 숨기기
// 6. 사이즈 select 초기 비활성화 (색상 선택 시 활성화)
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
const colorChoice = document.querySelector('.color')
const sizeChoice = document.querySelector('.size')
const orderPrice = document.querySelector('.order_price > .price > em')
const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
const orderNum = document.querySelector('#order_num')
const orderListPrice = document.querySelector('.order_list .price')
console.log (orderList,sizeSelect,colorSelect,colorChoice,sizeChoice)

orderList.style.display = 'none';
sizeSelect.disabled = true //사이즈 선택창 비활성화

// 6-2. (색상 선택 시 활성화)
// 7. 색상-> 사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것) 콘솔 ' 선택완료'
// 주문목록 출력 (선택한 값이 출력, 주문금액 변경) 
colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    //sizeSelect.disabled = false;
    //색상 select에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택 되었을때 사이즈 select 활성화 하기
    if(colorSelect.selectedIndex != 0 ){ //이 아닌 다른 값
        sizeSelect.disabled = false; //활성화
        //사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            //사이즈 옵션 인덱스 0이 아닌 것 선택 시 콘솔 선택완료
            console.log(sizeSelect.selectedIndex)
            console.log(sizeSelect.options[0])
            if(sizeSelect.selectedIndex !=0){
                console.log('선택완료')
                orderList.style.display = 'block';
                //선택한 옵션 안에 글자 가져오는 속성 text
                let orderColor = colorSelect.options[colorSelect.selectedIndex].textContent
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].textContent
                //let orderColorReplace = orderColor.replace(찾는값, 변경값)
                //정규표현식 시작과 끝 표시 / 검사내용 /
                //괄호찾기 \찾는문자 => \(.*\)
                //모든 내용 .*
                let orderColorReplace = orderColor.replace(/\(.*\)/,'');
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
                colorChoice.textContent = orderColorReplace;
                sizeChoice.textContent =orderSizeReplace;
                orderPrice.textContent = productOptDB[0].price.toLocaleString('ko-kr');
                //colorChoice.textContent = colorSelect.options[colorSelect.selectedIndex].text;
            }
        })
    }else { //사용자가 선택한 옵션이 0일때
        sizeSelect.disabled =true; // 비활성화
    }
})

//DB 불러오기 테스트
console.log(productOptDB[0].name) //몽쉘 패딩 하네스 올인원
console.log(productOptDB[0].color[0]+productOptDB[0].color[1]) //레몬피치

// DB ->HTML 적용
// 1. JS에서 HTML 함수로 생성 createElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log (colorOpt1,colorOpt2)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${productOptDB[0].price.toLocaleString('ko-kr')})`
colorOpt2.textContent = `${productOptDB[0].color[1]}(${productOptDB[0].price.toLocaleString('ko-kr')})`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1);
colorSelect.appendChild(colorOpt2);

// 생성한 태그가 li면 ul, ol의 마지막 자식 위치로 삽입
// 생성한 태그가 option면 select의 마지막 자식 위치로 삽입

// 8. 주문목록 'X' 클릭 주문목록 삭제, 주문금액 초기화
console.log(orderList.children[1])
orderList.children[1].addEventListener('click',()=>{ // parentNode 속성 활용하여 사용가능
    orderList.style.display = 'none';
    orderPrice.textContent= 0;
    colorSelect.selectedIndex = colorSelect.options[0] /* 색상 선택 초기화 */
    sizeSelect.selectedIndex = sizeSelect.options[0] /* 사이즈 선택 초기화 */
})

// 9. 주문목록 + 클릭 시 재고수량까지 수량+금액 표시
// 필요 목록 : +버튼(plusBtn), 재고수량(productOptDB[0].stock), 주문수량(orderNum), 주문금액(orderPrice), 증가 숫자 데이터

let num = 1;// 초기주문수량
orderNum.value = num;

// + 버튼 클릭 시 (1)주문 수량이 1씩 증가하고 (2)주문수량에 따라 가격(productOptD[0].price) 증가하기
plusBtn.addEventListener ('click',()=>{
    if(num <productOptDB[0].stock){
        orderNum.value = ++num;
        let total = num * productOptDB[0].price
        orderListPrice.textContent =total.toLocaleString('ko-kr')
        orderPrice.textContent =total.toLocaleString('ko-kr')
    }else {alert('최대 구매 수량입니다.')}
})

// 10. 주문목록 -버튼(minusBtn) 클릭 시 주문수량+주문금액 감소(1 이라면 경고창 출력)
minusBtn.addEventListener ('click',()=>{
    if(num > 1){
        orderNum.value= --num;
        let total = num*productOptDB[0].price
        orderListPrice.textContent =total.toLocaleString('ko-kr')
        orderPrice.textContent =total.toLocaleString('ko-kr')
    }else {alert('최소 구매 수량입니다.')}
})

// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12. 😊(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
const catBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
console.log(catBtn, buyBtn)

/* catBtn.addEventListener('click',()=>{
    if(colorSelect.selectedIndex ==0 || sizeSelect.selectedIndex == 0){
        alert('상품을 선택해주세요.') // 상품 미선택 확인하는 조건문
    }else{
        loginStatus = localStorage.getItem('isLogin')
        if(loginStatus == 'true'){location.href='./cart.html'
        }else {location.href='./login.html'}
    }
})
buyBtn.addEventListener('click',()=>{
    if(colorSelect.selectedIndex ==0 || sizeSelect.selectedIndex == 0){
        alert('상품을 선택해주세요.') // 상품 미선택 확인하는 조건문
    }else{
        loginStatus = localStorage.getItem('isLogin')
        if(loginStatus == 'true'){
        location.href='./cart.html'
        }else {location.href='./login.html'}
    }
    }) */

    catBtn.addEventListener('click',()=>{
        cartBuyBtnFunc('./cart.html')
    })
    buyBtn.addEventListener('click',()=>{
        cartBuyBtnFunc('./buy.html')
    })
function cartBuyBtnFunc(url){
    if(colorSelect.selectedIndex ==0 || sizeSelect.selectedIndex == 0){
        alert('상품을 선택해주세요.') // 상품 미선택 확인하는 조건문
    }else{
        loginStatus = localStorage.getItem('isLogin')
        if(loginStatus == 'true'){
        location.href= url
        }else {location.href='./login.html'}
    }}