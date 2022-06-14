const inputRadio = document.querySelectorAll('.input_radio');
const buttonCalculate = document.querySelector('.button_calculate ');
const btnGen = document.querySelectorAll('.btn-gen');
const genderWomen = document.querySelector('.gender_women ');
const genderMen = document.querySelector('.gender_men');
const buttonClear = document.querySelector('.button_clear');
const parametersInput = document.querySelectorAll('.parameters_input');
const activBtnDisabled = document.querySelector('.activ_btn_disabled');
const age = document.querySelector('.age');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const resultEightContent = document.querySelector('.result_eight_content');
const resultWeightLoss = document.querySelector('.result_weight_loss');
const resultWeightGain = document.querySelector('.result_weight_gain')
const activDiv = document.querySelector('.calorie_counter_result');
clearing();
countWomen();
countMen();


btnGen.forEach(event => {
    event.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        e.target.classList.toggle('active');

    })
});


parametersInput.forEach((elem) => {
    elem.addEventListener('input', () => {
        age.value !== '' && height.value !== '' && weight.value !== '' ? activBtnDisabled.disabled = false : activBtnDisabled.disabled = true;
       
    })

});


function countWomen() {
    inputRadio.forEach(event => {
        event.addEventListener('click', () => {
            buttonCalculate.addEventListener('click', () => {
                const amount = ((10 * +weight.value) + (6.25 * +height.value) - (5 * +age.value) - 161) * event.value;
                resultEightContent.innerHTML = (amount).toFixed() + ' ккалл';
                resultWeightLoss.innerText = (amount * 0.85).toFixed() + ' ккалл';
                resultWeightGain.innerText = (amount / 0.85).toFixed() + ' ккалл';
                activDiv.style.display = 'block'
            })
        })
    })

    genderWomen.addEventListener('click', () => {
        inputRadio.forEach(event => {
            event.addEventListener('click', () => {
                buttonCalculate.addEventListener('click', () => {
                    const amount = ((10 * +weight.value) + (6.25 * +height.value) - (5 * +age.value) - 161) * event.value;
                    resultEightContent.innerHTML = (amount).toFixed() + ' ккалл';
                    resultWeightLoss.innerText = (amount * 0.85).toFixed() + ' ккалл';
                    resultWeightGain.innerText = (amount / 0.85).toFixed() + ' ккалл';
                    activDiv.style.display = 'block'

                })
            })
        })
    })
}

function countMen() {
    genderMen.addEventListener('click', () => {
        inputRadio.forEach(event => {
            event.addEventListener('click', () => {
                buttonCalculate.addEventListener('click', () => {
                    const amount = ((10 * +weight.value) + (6.25 * +height.value) - (5 * +age.value) + 5) * event.value;
                    resultEightContent.innerHTML = (amount).toFixed() + ' ккалл';
                    resultWeightLoss.innerText = (amount * 0.85).toFixed() + ' ккалл';
                    resultWeightGain.innerText = (amount / 0.85).toFixed() + ' ккалл';
                    activDiv.style.display = 'block'
                })
            })
        })
    })
}

//cleaning function
function clearing() {
    buttonClear.addEventListener('click', () => {
        age.value = null;
        height.value = null;
        weight.value = null;
        resultEightContent.innerHTML = '';
        resultWeightLoss.innerHTML = '';
        resultWeightGain.innerHTML = '';
        activBtnDisabled.disabled = true;
        activDiv.style.display = 'none';
        inputRadio.forEach(event => {
            console.log(event)
            event = null;
        });

    })
}
