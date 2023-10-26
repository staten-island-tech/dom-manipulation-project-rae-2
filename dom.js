const DOMSelectors = {
    //store all realted code for selectinv elements here
    form: document.querySelector("#form"),
    cheese: document.querySelector(".cheese"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (header)=> (header.textContent = DOMSelectors.cheese.value)
    );    
});

 function card(cheese) {
    DOMSelectors.cheese.insertAdjacentHTML(
        "beforeend"
        
    )
 }