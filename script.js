const minNumber = document.querySelector('.minNumberInput').value;
const maxNumber = document.querySelector('.maxNumberInput').value;
const generateButton = document.querySelector('.generateButton');
const para = document.querySelector('p');

generateButton.addEventListener('click', () => {
   let answer = generateRandomNumber(minNumber, maxNumber);
   para.textContent = answer;
})









function generateRandomNumber(min,max){
    return Math.random() * (max - min) + min;
}





