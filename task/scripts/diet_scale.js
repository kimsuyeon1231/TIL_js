const scaleFrm = document.querySelector('#scale_form');

scaleFrm.addEventListener("submit", function(e) {
    e.preventDefault();
});

const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const resultBox = document.querySelector('.result');
const clickBtn = document.querySelector('.btn');

clickBtn.addEventListener('click', btnFunc);


function btnFunc() {
    if (!height.value || !weight.value) {
        resultBox.textContent = " 키와 몸무게를 모두 입력해주세요.";
        return;
    }
    
    // 1. 입력값 문자 -> 숫자 변환
    const inputHeight = Number(height.value);
    const inputWeight = Number(weight.value);
    
    // 2. 키에서 100 빼기
    const minus100 = inputHeight - 100;
    
    // 3. 적정체중 계산 (0.9 곱하기)
    const properWeight = minus100 * 0.9;
    
    // 4. 실제 체중과의 차이
    const difference = inputWeight - properWeight;
    
    // 5. 결과 메시지 만들기
    let message = `적정체중은 ${properWeight}kg 입니다. `;
    if (difference > 0) {
        message += `${difference}kg 초과되었습니다.`;
    } else if (difference < 0) {
        message += `${difference}kg 미달되었습니다.`;
    } else {
        message += `정상 체중입니다! `;
    }
    
    // 6. 출력
    resultBox.textContent = message;
}
console.log(typeof height.value)
console.log(typeof weight.value)