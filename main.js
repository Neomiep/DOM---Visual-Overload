function getRandomColor() {
    const all = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let i = 0
    let allRandom = "";
    while (i < 6) {
        allRandom += all[Math.floor(Math.random() * all.length)]
        i++
    }
    console.log(allRandom)
    return "#" + allRandom;
}
const addBox = function () {
    const container = document.getElementById("container")
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    box.style.backgroundColor = getRandomColor()
    box.onmouseenter = function () {
        box.style.backgroundColor = getRandomColor()
    }
    container.appendChild(box)
}
let i = 0
while (i < 6) {
    addBox()
    i++
}