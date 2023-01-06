const minNumber = document.querySelector('.minNumberInput');
const maxNumber = document.querySelector('.maxNumberInput');
const para = document.querySelector('p');
const button = document.querySelector('.generateButton');

function generateRandomNumber(min,max){
    return Math.random() * (max - min) + min;
}

generateRandomNumber(minNumber,maxNumber);

button.addEventListener("click", () => {
    para.textContent = "Hello";
})





