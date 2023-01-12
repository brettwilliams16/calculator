const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");


const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', () =>{
        topDisplay.textContent += number.textContent;
    })
});

