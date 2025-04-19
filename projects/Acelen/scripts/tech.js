
//eye tech variables
techDisplay = document.getElementsByClassName("tech-display");

drsDisplay = document.getElementById("drs-display");
drsButton = document.getElementById("drs-button");

detDisplay = document.getElementById("det-display");
detButton = document.getElementById("det-button");

rtDisplay = document.getElementById("rt-display");
rtButton = document.getElementById("rt-button");


//tech display toggler
techDisplayToggler = (element) => {
    for (let i = 0; i < techDisplay.length; i++) {
        if (techDisplay[i] !== element) {
            techDisplay[i].style.display = "none";
        }
    }
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "flex";
    }
}


//eye tech page event listeners
drsButton.addEventListener("click", () => {
    techDisplayToggler(drsDisplay);
})
detButton.addEventListener("click", () => {
    techDisplayToggler(detDisplay);
})
rtButton.addEventListener("click", () => {
    techDisplayToggler(rtDisplay);
})
