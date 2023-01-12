const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");

let numberOne = 0; // first number to be saved
let numberTwo = 0; // second number to be saved




operands.forEach(operand => {
    operand.addEventListener('click', () =>{
        if(isNaN(topDisplay.textContent.charAt(topDisplay.textContent.length - 1))){
            return;
        }
        numberOne = topDisplay.textContent;
        topDisplay.textContent += ` ${operand.textContent} `;
    })
})

numbers.forEach(number => {
    number.addEventListener('click', () =>{
        topDisplay.textContent += number.textContent;
    })
});

clear.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteDigit);






function clearDisplay() {
    topDisplay.textContent = '';
}

function deleteDigit() {
    if(topDisplay.textContent.charAt(topDisplay.textContent.length -1) === ' '){
        topDisplay.textContent = topDisplay.textContent.slice(0, -2);
    }
    else {
        topDisplay.textContent = topDisplay.textContent.slice(0, -1);
    }
    
}
