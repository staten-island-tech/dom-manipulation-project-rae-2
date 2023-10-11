DOMSelectors = {
    //store all realted code for selectinv elements here
    form: document.querySelector("#form"),
    cheese: document.querySelector(".ch-eese"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (header)=> (header.textContent = DOMSelectors.cheese.value)
    );    
});
