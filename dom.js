const DOMSelectors = {
    //store all realted code for selectinv elements here
    form: document.querySelector("#form"),
    nameofrecipe: document.getElementById("nameofrecipe"),
    picture: document.getElementById("picture"),
    recipe: document.getElementById("recipe"),
    button: document.getElementById("button"),
    container: document.querySelector(".container")
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    newstuff()
});

function clear(DOMSelectors){
    DOMSelectors.nameofrecipe.value = DOMSelectors.picture.value = DOMSelectors.recipe.value = "";
};

function remove(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn)=>
    btn.addEventListener("click", function (event) {
        btn.parentElement.remove();
    })
    );
}

function newstuff() {
    const whatever = {
        name: DOMSelectors.nameofrecipe.value,
        picture: DOMSelectors.picture.value,
        recipe: DOMSelectors.recipe.value,
    };
    insert(whatever, DOMSelectors);
}

function insert(whatever, DOMSelectors) {
    DOMSelectors.container.insertAdjacentHTML("afterbegin",
    `<div class="parentcard">
        <h2 class="card-title">${whatever.name}</h2>
            <img src="${whatever.picture}" alt="picture" class="image"></img>
        <h2 class="card-price">${whatever.recipe}</h2>
        <button>kms</button>
    </div>`);
    clear(DOMSelectors);
    remove();
}

