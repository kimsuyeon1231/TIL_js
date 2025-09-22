// 3. 리뷰 클릭 시 리뷰창으로 이동
//

// 1. 좌측 이미지 클릭하면 큰상품 이미지가 왼쪽으로 넘어가면서 변경
// 1-1. 좌측 이전 이미지 클릭하면 큰상품 이미지 오른쪽으로 넘어가면서 변경
// 2. 큰상품 이미지 안에 ．．．클릭하면 활성화 된 .은 검은색으로 변경, 이미지 왼쪽으로 넘어가면서 변경
// 2-1. 지나온 . 클릭 시 이미지 오른쪽으로 넘어가면서 변경
const thumnailImg = document.querySelectorAll ('.tnumnail a')
const bigImg = document.querySelector ('.poto')
const circle = document.querySelectorAll ('.circle span')

console.log(thumnailImg[0], circle)

bigImg.style.transition ='transform 0.3s';

thumnailImg[1].addEventListener('click',()=>{
    bigImg.style.transform = `translateX(-${bigImg.children[0].offsetWidth*1}px)`
    circle[0].classList.remove('active');
    circle[2].classList.remove('active');
    circle[3].classList.remove('active');
    circle[1].classList.add('active');
})
thumnailImg[2].addEventListener('click',()=>{
    bigImg.style.transform = `translateX(-${bigImg.children[0].offsetWidth*2}px)`
    circle[0].classList.remove('active');
    circle[1].classList.remove('active');
    circle[3].classList.remove('active');
    circle[2].classList.add('active');
})
thumnailImg[3].addEventListener('click',()=>{
    bigImg.style.transform = `translateX(-${bigImg.children[0].offsetWidth*3}px)`
    circle[0].classList.remove('active');
    circle[1].classList.remove('active');
    circle[2].classList.remove('active');
    circle[3].classList.add('active');
})
thumnailImg[0].addEventListener('click',()=>{
    bigImg.style.transform = `translateX(0px)`
    circle[1].classList.remove('active');
    circle[2].classList.remove('active');
    circle[3].classList.remove('active');
    circle[0].classList.add('active');
})
// 4. 수량 -버튼 클릭 시 숫자 감소 (수량이 1일때 누를 경우 '최소 주문수량은 1개 입니다.' 팝업창 실행)
// 5. 수량 +버튼 클릭 시 숫자 증가 (수량이 30일때 누를 경우 '최대 주문수량은 30개 입니다.' 팝업창 실행 - 최대 주문 가능 수량 30개)
// 6. 수량 바뀔 시 아래 총상품금액 및 금액 옆 괄호 안에 선택한 수량만큼 숫자 변경
const minusBtn = document.querySelector ('.minus_btn')
const plusBtn = document.querySelector ('.plus_btn')
const orderCount = document.querySelector ('#order_num')
const price = document.querySelector ('.price .price_em')
const ordernum = document.querySelector ('.num_em')
console.log(minusBtn, plusBtn, orderCount,price,ordernum)

let num = 1;
const sampooPrice = 44900
console.log(typeof(num))
orderCount.value = num;

plusBtn.addEventListener('click',()=>{
    if(num < 30){orderCount.value = ++num;
        let total = num*sampooPrice
        price.textContent = total.toLocaleString('ko-kr')
        ordernum.textContent= +num;
    }else{alert('최대 주문수량은 30개 입니다.')}
})
minusBtn.addEventListener('click',()=>{
    if(num > 1){orderCount.value = --num;
        let total = num*sampooPrice
        price.textContent = total.toLocaleString('ko-kr')
        ordernum.textContent= -num;
    }else{alert('최소 주문수량은 1개 입니다.')}
})
