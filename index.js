const header = document.getElementById("header"),
    userInput = document.getElementById("userInput"),
    submitBtn = document.getElementById("submitBtn");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * maxNum) + minNum;

let attempts = 0;
let guess;
let running = true;



while(running){

    submitBtn.onclick = function() {
        guess = Number(userInput.value);


        if (guess > maxNum || guess < minNum || isNaN(guess)){

            header.textContent = `Please enter a number between 1 - 100`;
        }
        else{
            attempts++;

            if(guess > answer){
                header.textContent = `TOO HIGH! TRY AGAIN!`;
            }
            else if (guess < answer){
                header.textContent = `TOO LOW! TRY AGAIN!`;
            }
            else{
                header.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts`;
            
            }
        }

    }
    running = false;

}







