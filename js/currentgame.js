import {Word} from "./Word.js";

//New Game
const newGameButton = document.querySelector("#new-game");
const themeSelector = document.querySelector("#theme-selector");

newGameButton.addEventListener('click', () => {themeSelector.classList.toggle("visible")})

const listaSintomas = [
    "tosse",
    "febre",
    "coriza",
    "dor de garganta",
    "anosmia",
    "ageusia",
    "nausea",
    "vomito",
    "diarreia",
    "astenia",
    "hiporexia",
    "falta de ar"
];

const listaTransmissao = [
    "espirro",
    "tosse",
    "catarro",
    "objetos contaminados",
    "saliva",
    "aperto de mao"
];

const listaVariados = [
    "quarentena",
    "pandemia",
    "virus",
    "grupo de risco",
    "taxa de mortalidade",
    "china"
]

const listaCuidados = [
    "lavar as maos",
    "nao tocar rosto",
    "manter distancia",
    "higienizar objetos",
    "usar mascara",
    "isolamento",
    "ficar em casa"
]

const listaTratamentos = [
    "umidificador de ar",
    "vacina",
    "beber agua",
    "evitar anti inflamatorios",
    "repousar"
]

const listVariados2 = [
    "curva epidemica",
    "hospitais superlotados",
    "adiamento de eventos",
    "escolas fechadas",
    "falta de produtos nos supermercados",
    "aumento de precos"
]

let themeButtons = document.querySelectorAll(".theme");

const currentTheme = document.querySelector("#current-theme");

let currentWord;

const keys = document.querySelectorAll(".key");

themeButtons.forEach(function(theme){
    let themeList = eval(theme.dataset.theme);
    theme.addEventListener('click', function(){
        currentTheme.innerHTML = theme.innerHTML + "\n";
        let newWord = themeList[Math.floor(Math.random() * themeList.length)];
        currentWord = new Word(newWord.toUpperCase());
        themeSelector.classList.remove("visible");
        alertBox.classList.remove("visible");
        gameKeyboard.classList.add("visible");
        keys.forEach(function(key) {
            key.classList.remove("pressed");
        })
    })
})

keys.forEach(function(key) {
    key.addEventListener('click', () => currentWord.checkCharacters(key.innerHTML, key));
})

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

export function gameAlert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

export {currentWord, alertBox, gameKeyboard};