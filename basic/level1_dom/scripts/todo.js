//1.input 할일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 할일 추가하기
const listUl = document.querySelector('#list_wrap')
const listInput = document.querySelector('#list')
const listBtn = document.querySelector('#list_add')
console.log(listBtn, listInput, listUl)

listBtn.addEventListener('click',()=>{
    //입력안하면 '할일을 입력하세요' 메세지 출력 (삼항조건)
    listInput.value == ''? alert('할일을 입력하세요') : toDoFunc();
})

listInput.addEventListener('keyup',(e)=>{
    if(e.key ==='Enter'){listInput.value == ''? alert('할일을 입력하세요') : toDoFunc(); } 
})

function toDoFunc () {
    console.log(listInput.value) //값 확인
    console.log(listUl) //대입할 대상 확인
    listUl.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`;
    listInput.value = '';

    const closeBtn = document.querySelectorAll ('.close')
    //부모 잡는 속성 parentNode
    //삭제하는 속성 remove();
    for (let i of closeBtn){
        i.addEventListener('click',()=>{
            i.parentNode.remove()
        })
    }

    return console.log('할일출력 테스트');
}
