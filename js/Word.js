import {gameAlert} from "./currentgame.js";

var tamanho;
export class Word {

    constructor(word) {
        this.characters = word.split("");
        tamanho = this.characters.length;
        this.boxes = this.characters.map(function (char) {
            if(char == ' ') {
                tamanho--;
                return '-';
            } else {
                return "_";
            }
        });
        this.mistakes = 0;
        this.corrects = 0;

        //creating boxes
        const currentWordDiv = document.querySelector("#current-word");
        currentWordDiv.innerHTML = "";
        this.boxes.forEach(box => {
            currentWordDiv.innerHTML += `<span class="letter"></span>`
        });

        this.currentWordSpaces = document.querySelectorAll("#current-word .letter");
        this.hangmanImg = document.querySelector("#hangman-image img");
        this.hangmanImg.src = `./img/img${this.mistakes}.png`;

        for (let i = 0; i < this.boxes.length; i++) {
            if(this.boxes[i] == '-') {
                this.currentWordSpaces[i].innerHTML = '-';
            }
        }
    }
    
    
    checkCharacters(char, keyButton) {
        let gotRight = false;
        for(let i = 0; i < this.boxes.length; i++) {
            if(char == this.characters[i]) {
                if (char !== this.boxes[i]) {
                    this.corrects++;
                }
                this.boxes[i] = char;
                this.currentWordSpaces[i].innerHTML = char;
                gotRight = true;
            }
        }
        
        if (keyButton.classList.contains("pressed") == false) {
            if(!gotRight) {
                this.mistakes++;
                this.hangmanImg.src = `./img/img${this.mistakes}.png`;
            }

            keyButton.classList.add("pressed")
        }


        if (this.mistakes == 6) {
            gameAlert("Você perdeu!");
        } else {
            if(this.corrects == tamanho) {
                gameAlert("Você venceu");
            }
        }

    }
}