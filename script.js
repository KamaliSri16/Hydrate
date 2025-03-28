const water = document.getElementById("water");
const pourButton = document.getElementById("pourButton");
const emptyButton = document.getElementById("emptyButton");
let waterLevel = 0;
let pouring;

pourButton.addEventListener("mousedown", () => {
    pouring = setInterval(() => {
        if (waterLevel < 50) {
            waterLevel += 1;
            water.style.height = waterLevel + "%";
        }
    }, 200);
});

pourButton.addEventListener("mouseup", () => {
    clearInterval(pouring);
});

pourButton.addEventListener("mouseleave", () => {
    clearInterval(pouring);
});

emptyButton.addEventListener("click", () => {
    waterLevel = 0;
    water.style.height = waterLevel + "%";
});
