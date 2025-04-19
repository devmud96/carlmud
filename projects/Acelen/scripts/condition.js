




//eye conditions variables
conditionsDisplay = document.getElementsByClassName("condition-display");

cataractsBtn = document.getElementById("cataracts-button");
cataractsDisplay = document.getElementById("cataracts-display");

diabetesBtn = document.getElementById("diabetes-button");
diabetesDisplay = document.getElementById("diabetes-display");

glaucomaBtn = document.getElementById("glaucoma-button");
glaucomaDisplay = document.getElementById("glaucoma-display");

macularBtn = document.getElementById("macular-button");
macularDisplay = document.getElementById("macular-display");





//conditions display toggler
conditionsDisplayToggler = (element) => {
    for (let i = 0; i < conditionsDisplay.length; i++) {
        if (conditionsDisplay[i] !== element) {
            conditionsDisplay[i].style.display = "none";
        }
    }
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "flex";
    }
}



//eye conditions page event listeners
cataractsBtn.addEventListener("click", () => {
    conditionsDisplayToggler(cataractsDisplay);
})
diabetesBtn.addEventListener("click", () => {
    conditionsDisplayToggler(diabetesDisplay);
})
glaucomaBtn.addEventListener("click", () => {
    conditionsDisplayToggler(glaucomaDisplay);
})
macularBtn.addEventListener("click", () => {
    conditionsDisplayToggler(macularDisplay);
})

