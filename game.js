"use strict"

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let number = Math.floor(Math.random() * 100);

let doPlayAgain = true;

while (doPlayAgain) {
    playGame();
    doPlayAgain = confirm('Играть еще раз?');
}

function isNumberValid() {
    return !isNaN(number) && number >= MIN_NUMBER && number <= MAX_NUMBER;
}

function getUserNumber(tipMassage) {
    let userNumber;
    let isValid

    while (!isValid) {
        if (tipMassage) alert(tipMassage);

        const inputValue = prompt('Угадай число от 1 до 100');
        if (inputValue === null) return inputValue;
        userNumber = parseInt(inputValue);
        isValid = userNumber;
    }
    return userNumber;
}

function playGame() {
    const secretNumber = number;

    let userNumber;
    let tipMassage;

    while(secretNumber !== userNumber) {
        userNumber = getUserNumber(tipMassage);

        if (userNumber > secretNumber) {
            tipMassage = "Много";
        } else if (userNumber < secretNumber) {
            tipMassage = "Мало";
        } else {
            alert("Угадал!!!");
        }
    }

}
