

// Konstanten und Variablen, die man deklarieren brauchen.

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

// Verbindung durch ID mit den Elementen von der Html Datei.

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

//Event click mit den Btns: Rock, Paper und Scissors.

rockBtn.addEventListener("click", () => {
    //4. Ich füge die Function play zu die event hin.
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    //4.
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    //4.
    play(SCISSORS);
});

// 3. Funktion "play" deklarieren.

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

//Ich füge ein Bild hinzu: mit der Property .src.    
    userImg.src = "img/" + userOption + ".svg";

//Ich füge das Text (resultText) mit der Property .innerHTML.    
    resultText.innerHTML = "Choosing!";


//Ich organiziere die Zeitspanne von dem loop Bilder/img
    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);
//Arranca el codigo de debajo despues 
    setTimeout(function () {
        //stoped setInterval
        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case WIN:
                resultText.innerHTML = "You win!";
                break;
            case LOST:
                resultText.innerHTML = "You lost!";
                break;
        }

        machineImg.src = "img/" + machineOption + ".svg";
        isPlaying = false;
    }, 2000);
}
//1. Ich deklariere Function calcMachineOption, die habe drei optionen für ein Random Zahl.
function calcMachineOption() {
    // Logik für eine randomisierte Zahl in drei Optionen. Ich habe die math.floor und maht.random Methoden verwendet.
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

// 2. Optionen, die wir haben: TIE, LOST und WIN. und wie man das kalkulieren kann.
function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;

    }
}