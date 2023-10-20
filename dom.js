DOMSelectors = {
    //store all realted code for selectinv elements here
    form: document.querySelector("#form"),
    cheese: document.querySelector(".cheese"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit"), function (event) {
    event.preventDefault();
    document.querySelector(".gallery").insertAdjacentElement(
        "beforeend",
        `<div class="card">
        <h2 class="card-title">${DOMSelectors.cheese.value}</h2>
        </div>`
    );    
};
DOMSelectors.form.addEventListener("submit",function (event){
    event.preventDefault();
    cardThing(),
    ClearFields(),
    RemoveFunction();
});