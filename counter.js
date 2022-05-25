let counterElement = document.getElementById("Counternumber");

function onIncrement() {
    let previousvalue = counterElement.textContent;
    let updatevalue = parseInt(previousvalue) + 1;
    counterElement.textContent = updatevalue;
    if (updatevalue > 0) {
        counterElement.style.color = "green";
    } else if (updatevalue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onReset() {
    let updatevalue = 0;
    counterElement.textContent = updatevalue;
    counterElement.style.color = "black"
}

function onDecrement() {
    let previousvalue = counterElement.textContent;
    let updatevalue = parseInt(previousvalue) - 1;
    counterElement.textContent = updatevalue;
    if (updatevalue > 0) {
        counterElement.style.color = "green";
    } else if (updatevalue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

}