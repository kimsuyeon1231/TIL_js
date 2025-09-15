            document.getElementById("scale-form").addEventListener("submit", function(event) {
            event.preventDefault(); // 폼 제출 기본 동작 막기

            const height = parseFloat(document.getElementById("height").value);
            const weight = parseFloat(document.getElementById("weight").value);
            const resultBox = document.getElementById("result");

            if (!height || !weight) {
                resultBox.textContent = "키와 몸무게를 모두 입력해주세요.";
                return;
            }

            // 적정체중 계산
            const properWeight = (height - 100) * 0.9;
            const difference = weight - properWeight;

            let message = `적정체중은 ${properWeight.toFixed(1)}kg 입니다. `;
            if (difference > 0) {
                message += `${difference.toFixed(1)}kg 초과되셨습니다.`;
            } else if (difference < 0) {
                message += `${Math.abs(difference).toFixed(1)}kg 미달되셨습니다.`;
            } else {
                message += `정상 체중입니다!`;
            }

            resultBox.textContent = message;
        });