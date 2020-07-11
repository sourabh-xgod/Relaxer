const container = document.getElementById("breathe-circle");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimation() {
    text.innerText = "Breathe In!";
    container.classList = "breathe-circle grow";

    setTimeout(() => {
        text.innerText = "Hold.";

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.classList = "breathe-circle shrink";
        }, holdTime);
    }, breatheTime);
}

breatheAnimation();

setInterval(breatheAnimation, totalTime);

// Click Event for RESET - Button
document.querySelector("button").addEventListener("click", () => {
    window.location.reload(true);
});