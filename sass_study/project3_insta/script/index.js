const instaMenu = document.querySelectorAll('.menu .left a')
console.log(instaMenu)

instaMenu[0].addEventListener('click',function(){iconChange(this, 'like')})
instaMenu[1].addEventListener('click',function(){iconChange(this, 'comment')})
instaMenu[2].addEventListener('click',function(){iconChange(this, 'paper')})
function iconChange(target, name){
    return target.children[0].src = `./images/${name}_on.png`
}
/* instaMenu[0].addEventListener('click',iconChange(0, 'like'))
instaMenu[1].addEventListener('click',iconChange(1, 'comment'))
instaMenu[2].addEventListener('click',iconChange(2, 'paper'))
function iconChange(index, name){
    return function(){
        instaMenu[index].children[0].src = `./images/${name}_on.png`
    }
} */
/* instaMenu[0].addEventListener('click',function(e)=>{
    e.preventDefault()
    console.log(this)
    instaMenu[0].children[0].src='./images/like_on.png'
})*/
/*     instaMenu[1].addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(this)
    instaMenu[0].children[0].src='./images/comment_on.png'
}) */

//사진 클릭 시 스피커 모양 보이기 (+애니메이션)
const instaPhoto = document.querySelector('main> .photo');
const volumeIcon = document.querySelector('#popup');
console.log(instaPhoto, volumeIcon)
volumeIcon.style.transition = 'opacity 1s'
instaPhoto.addEventListener('dblclick',()=>{
    volumeIcon.style.opacity = 1;
    })
    instaPhoto.addEventListener('mouseout',()=>{
        volumeIcon.style.opacity = 0;
        })
    