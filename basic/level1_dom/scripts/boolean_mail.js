//console.log(isLogin)
window.addEventListener('load',()=>{
    let loginStatus = localStorage.getItem('isLogin2') // true
    console.log (loginStatus) //boolean.js에서 로그인 성공하면 true가 나온다.
    //console.log (typeof(loginStatus))

    //DOM 변수
    const mailLogin = document.querySelector('#login')
    const mailLogout = document.querySelector('#logout')

    if(loginStatus == 'true'){
        console.log('로그인 화면')
        mailLogin.style.display = 'block' /* 만약 css에서 디자인을 gird 혹은 felx 를 사용했을 경우 블록이 아닌 지정된 값 삽입 */
        mailLogout.style.display = 'none'
    }else {
        console.log('로그아웃 화면')
        mailLogout.style.display = 'block'
        mailLogin.style.display = 'none'
    }
})