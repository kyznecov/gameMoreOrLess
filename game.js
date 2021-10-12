"use strict"

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let doPlayAgain = true;

while (doPlayAgain) {
    playGame();

    doPlayAgain = confirm('Играть еще?');
}

function getRandomValue() {
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

function isNumberValid(number) {
    return !isNaN(number) && number >= MIN_NUMBER && number <= MAX_NUMBER;
}

function requestUserNumber(tipMessage) {
    let userNumber;
    let isValid
    
    while (!isValid) {
        if (tipMessage) alert(tipMessage);

        const inputValue = prompt(`Введите число от ${MIN_NUMBER} до ${MAX_NUMBER}`, '');

        if (inputValue === null) return inputValue;

        userNumber = parseInt(inputValue);
        
        isValid = isNumberValid(userNumber);

        if (!isValid) alert('Неверное значение!');
    }

    return userNumber;    
}

function playGame() {
    const secretNumber = getRandomValue(MIN_NUMBER, MAX_NUMBER);

    let userNumber;
    let tipMessage;

    while(secretNumber !== userNumber) {
        userNumber = requestUserNumber(tipMessage);

        if (userNumber === null) break;

        if (userNumber > secretNumber) {
            tipMessage = 'Много!';
        } else if (userNumber < secretNumber) {
            tipMessage = 'Мало!'
        } else {
            alert('Угадал!');
        }
    }
}
