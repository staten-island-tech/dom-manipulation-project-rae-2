const DOMSelectors = {
    //store all realted code for selectinv elements here
    form: document.querySelector(".form"),
    recname: document.getElementById("recname"),
    picture: document.getElementById("picture"),
    recipe: document.getElementById("recipe"),
    button: document.getElementById("button"),
    container: document.getElementById("container")
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    newstuff()
});

function newstuff() {
    const whatever = {
        name: DOMSelectors.recname.value,
        picture: DOMSelectors.picture.value,
        recipe: DOMSelectors.recipe.value,
    };
    insert(whatever, DOMSelectors);
}

function insert(whatever, DOMSelectors) {
    DOMSelectors.container.insertAdjacentHTML("afterbegin",
    `<div class="box">
        <h2 class="the-card-title">${whatever.name}</h2>
            <img src="${whatever.pictures}" alt="picture" class="image"></img>
        <h2 class="therecipe">${whatever.recipe}</h2>
    </div>`);
    clear(DOMSelectors);
}

function clear(DOMSelectors){
    DOMSelectors.recname.value = DOMSelectors.picture.value = DOMSelectors.recipe.value = "";
};
function remove(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn)=>
    btn.addEventListener("click", function (event) {
        console.log(event.target.parentElement);
    })
    );
}

remove(); 