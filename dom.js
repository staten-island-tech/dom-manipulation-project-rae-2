/* 
const button = document.getElementById("btn");
const text = document.querySelector("#text");
console.log(text); */

const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("this is your album!!!!"),
};

function backgrounds(background, text){
    background.style.backgroundColor = "green";
    text.innerHTML = "Tyarrrr"
    text.style.fontSize = "40px";
}

backgrounds(DOMSelectors.box);