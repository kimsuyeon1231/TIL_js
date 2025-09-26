//setInterval (콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    if(num1 > 5) num1 = 1
    console.log('timer test'+ num1)
    num1++
}, 500) */

// 0 ~ 6 반복 타이머
/* let num0 = 0;
const timer = setInterval(function(){
    num0++
    if(num0 > 6) num0 = 0
    console.log(num0)
}, 500)
 */
// 3 ~ 0 반복 타이머
/* let num3 = 3;
const timer = setInterval(function(){
    console.log(num3)
    num3--
    if(num3 < 0) num3 = 3
}, 500) */

//이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
console.log(gentleSlide,gentleSlide2,gentleSlideCurrentNum,gentleSlideTotalNum)
let gentleNum = 0;

//슬라이드 총&현재 번호 표시
gentleSlideTotalNum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentleNum+1


//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345

/* let gentleNum = 0;
let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0;
    //console.log(gentleNum)
    for(let i of gentleSlide) i.style.display ='none'
    gentleSlide[gentleNum].style.display = 'block'
},500)

let gentleNum2 = gentleSlide2.length - 1;
let gentleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0) gentleNum2=gentleSlide2.length -1;
    for(let i of gentleSlide2)i.style.display='none'
    gentleSlide2[gentleNum2].style.display='block'
    console.log(gentleNum2)
},500) */

//opacity + visiblity 서서히 나타나는 슬라이드 애니메이션
//gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 가능 적용 transition
for (let i of gentleSlide) i.style.transition = 'opacity 0.5s'

let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0;
    for(let i of gentleSlide) {
        i.style.visibility = 'hidden'; 
        i.style.opacity = '0'; }
    gentleSlide[gentleNum].style.visibility = 'visible'
    gentleSlide[gentleNum].style.opacity = '1'
},3000)

let gentleNum2 = gentleSlide2.length - 1;
let gentleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0) gentleNum2=gentleSlide2.length -1;
    for(let i of gentleSlide2)i.style.display='none'
    gentleSlide2[gentleNum2].style.display='block'
    console.log(gentleNum2)
},500)


