    const form = document.getElementById('scale-form');
    const heightEl = document.getElementById('height');
    const weightEl = document.getElementById('weight');
    const errorEl = document.getElementById('formError');
    const resultEl = document.getElementById('result');
    const bmiValueEl = document.getElementById('bmiValue');
    const statusBadge = document.getElementById('statusBadge');
    const tipsEl = document.getElementById('tips');

    function classifyBMI(bmi) {
    if (bmi < 18.5) return { label: '저체중', badgeClass: 'warn', tip: '식사량과 단백질 섭취를 늘리고 근력운동을 시도해보세요.' };
    if (bmi < 23)   return { label: '정상',   badgeClass: 'good', tip: '현재 패턴을 유지하고 가벼운 유산소 + 근력운동을 병행하세요.' };
    if (bmi < 25)   return { label: '과체중', badgeClass: 'warn', tip: '주 3회 30분 걷기부터 시작하고, 간식은 단백질/식이섬유 위주로 바꿔보세요.' };
    if (bmi < 30)   return { label: '비만',   badgeClass: 'warn', tip: '하루 500kcal 감량, 설탕/음료 줄이기, 주 4회 이상 유산소를 권장합니다.' };
    return { label: '고도비만', badgeClass: 'warn', tip: '의료진 상담과 맞춤형 식단/운동 계획을 고려해보세요.' };
    }

    form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.style.display = 'none';

    const h = parseFloat(heightEl.value);
    const w = parseFloat(weightEl.value);

    if (Number.isNaN(h) || Number.isNaN(w)) {
        errorEl.textContent = '키와 몸무게를 모두 입력하세요.';
        errorEl.style.display = 'block';
        resultEl.classList.add('hidden');
        return;
    }
    if (h < 80 || h > 250 || w < 20 || w > 250) {
        errorEl.textContent = '입력 범위를 확인하세요. (키 80–250, 몸무게 20–250)';
        errorEl.style.display = 'block';
        resultEl.classList.add('hidden');
        return;
    }

    const bmi = w / Math.pow(h / 100, 2);
      const bmiRounded = Math.round(bmi * 10) / 10;
    const { label, badgeClass, tip } = classifyBMI(bmiRounded);

    bmiValueEl.textContent = `BMI ${bmiRounded}`;
    statusBadge.textContent = label;
    statusBadge.className = `badge ${badgeClass}`;
    tipsEl.textContent = tip + ' (참고용 지표입니다)';

    resultEl.classList.remove('hidden');
    });