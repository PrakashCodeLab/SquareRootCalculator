const inputValue = document.querySelector('.input__value');
const btnSubmit = document.querySelector(".btn__submit");
const outputValue = document.querySelector('.output__value');



btnSubmit.addEventListener("click", () => {
    const inputNumber = inputValue.value.trim();
    console.log(typeof inputNumber, inputNumber);


    if (isNaN(inputNumber)) {
        outputValue.innerHTML = "enter the valid number ";
        outputValue.classList.add("hidden__red");
    } else {
        if (inputNumber === "") {
            outputValue.innerHTML = "box is empty , enter the number";
            outputValue.classList.add("hidden__red");
        } else if (Math.sign(inputNumber) === -1) {
            outputValue.innerHTML = "enter only postive number because negative numbers cannot be sqrt";
            outputValue.classList.add("hidden__red");
        } else {
            const outputSqrt = Math.sqrt(inputNumber);
            console.log(typeof outputSqrt, outputSqrt)
            outputValue.innerHTML = outputSqrt;
            outputValue.classList.remove("hidden__red");
        }
    }

})


