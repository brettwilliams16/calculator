const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");

let numberOne = 0; // first number to be saved
let numberTwo = 0; // second number to be saved
let operandSelected = ""; // variable to save the operand
let sum = 0; // variable to save the sum
let lastAdded = null;



decimal.addEventListener("click", () => {
    // let topDisplayLength = topDisplay.textContent.length - 1;
    // if(!(topDisplay.textContent[topDisplayLength] === '.')){
    //     topDisplay.textContent += decimal.textContent;

    // }
    if(numberTwo === 0){
        if(!topDisplay.textContent.includes(".")){ // checks to see if number one is not yet complete, then checks
                                                   // to see if it already has a decimal, if not, add it
            topDisplay.textContent += decimal.textContent;
        }
    }
    else{
        if(!numberTwo.includes(".")){ // does the same thing for number two as stated above
            numberTwo += "."
            topDisplay.textContent += decimal.textContent;
        }
    }
});


operands.forEach(operand => {
    operand.addEventListener('click', () =>{
        if(isNaN(topDisplay.textContent.charAt(topDisplay.textContent.length - 1))){ // checks to see if current char is an operand
            return;
        }
        if(numberOne === 0) { // checks if number one has already been saved or not
            numberOne = parseFloat(topDisplay.textContent);   
        }
        if(numberOne !== 0 && numberTwo !== 0){ // modifies numberTwo after numberOne has been saved
            numberTwo = parseFloat(numberTwo);
            numberOne = evaluate(numberOne, numberTwo, operandSelected);
            numberTwo = 0;
        }
        operandSelected = operand.textContent;
        topDisplay.textContent += ` ${operand.textContent} `;
    })
});

numbers.forEach(number => { // gets the text of each number btn and adds it to display / number variables
    number.addEventListener('click', () =>{
        if(numberOne !== 0){
            numberTwo += number.textContent;
        }
        topDisplay.textContent += number.textContent;
    })
});

equal.addEventListener('click', () =>{ // works same as numbers.forEach
    numberTwo = parseFloat(numberTwo); 
    sum = evaluate(numberOne, numberTwo, operandSelected);
    numberOne = sum;
    numberTwo = 0;
    bottomDisplay.textContent = sum;
    topDisplay.textContent = "";
})


clear.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteDigit);





function evaluate(number1, number2, operandSelected){ // solves the arithmetic portion, simple switch statement
    switch(operandSelected) {
        case "/":
            return number1 / number2;
            break;
        case "X":
            return number1 * number2;
            break;
        case "-":
            return number1 - number2;
            break;
        case "+":
            return number1 + number2;
            break;
    }
}
function clearDisplay() { // clears the display on both ends, top and bottom. functionality for the C button
    topDisplay.textContent = '';
    bottomDisplay.textContent = '';
    numberOne = 0;
    numberTwo = 0;
}

function deleteDigit() { // functionality for the delete button. goes back one space 
    if(topDisplay.textContent.charAt(topDisplay.textContent.length -1) === ' '){ // checks to see if char is a space, if so
                                                                                 // deletes 3 digits sence operators have
                                                                                 // " + "
        topDisplay.textContent = topDisplay.textContent.slice(0, -3);
    }
    else {
        topDisplay.textContent = topDisplay.textContent.slice(0, -1);
    }
    
}
