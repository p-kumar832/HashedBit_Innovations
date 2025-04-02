function createDiv(width, height, text) {
    let newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;
    newDiv.classList.add("custom-div");
    
    document.getElementById("container").appendChild(newDiv);
}
window.createDiv = createDiv;
