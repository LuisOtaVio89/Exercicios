function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playsound() {
    let clicksound = document.getElementById('selecionasom');
    if (clicksound) {
        clicksound.play().catch(error => {
            console.error('Erro ao tentar reproduzir o som:', error);
        });
    }
}

function handleAnswer(questionName, selectedValue) {
    document.querySelectorAll('.result-image').forEach(img => img.style.display = 'none');
    
   
    const selectedImage = document.getElementById(selectedValue);
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "B",
        q2: "D",
        q3: "C",
        q4: "A",
        q5: "C",
        q6: "C",
        q7: "A"
    };

    let score = 0;

    for (let key in correctAnswers) {
        let selectedOption = document.querySelector(`input[name="${key}"]:checked`);

        if (selectedOption) {
            let userAnswer = selectedOption.value;
            if (userAnswer === correctAnswers[key]) {
                score++;
            }
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 7 perguntas`;

    if (score === 7) {
        let successSound = document.getElementById('venceusom');
        successSound.play().catch(error => {
            console.error('Erro ao tentar reproduzir o som de vitória:', error);
        });
    } else {
        let perdeuSound = document.getElementById('perdeuSom');
        perdeuSound.play().catch(error => {
            console.error('Erro ao tentar reproduzir o som de derrota:', error);
        });
    }

  
    document.querySelector('button[onclick="SubmitQuiz()"]').disabled = true;
    document.getElementById('resetbutton').disabled = false;

    document.querySelectorAll('.result-image').forEach(img => img.style.display = 'none');

    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = true);
}

function resetQuiz() {
    let form = document.querySelector('form');
    form.reset();

    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    document.querySelector('button[onclick="SubmitQuiz()"]').disabled = false;

    document.getElementById('resetbutton').disabled = true;

    document.getElementById('result').innerHTML = "";
}
