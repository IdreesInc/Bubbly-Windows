// Created with ❤ by Idrees Hassan - MIT Licensed - Source available here: https://github.com/IdreesInc/Bubbly-Windows

const SPACE_BETWEEN_WINDOWS = 20; // Total space between each window (margin * 2)
const MIN_TIME = 5 // Min duration of the animation
const MAX_TIME = 10; // Max duration of the animation
const MIN_SIZE = 150; // Min bubble diameter
const MAX_SIZE = 250; // Max bubble diameter
const COLORS = [
    "rgb(235, 136, 255)",
    "rgba(102, 201, 247)",
    "rgb(35, 221, 144)",
    "rgb(255, 208, 70)",
];

let counter = 0; // Used to make sure element IDs are unique
let windows = document.getElementsByClassName("window");

function createBubble(diameter = 200) {
    if (document.visibilityState !== "visible") {
        return;
    }

    let time = MIN_TIME + Math.random() * MAX_TIME;
    let hiddenOffset = diameter * 2;
    let leftOffset = Math.random() * windows[0].offsetWidth - diameter / 2;
    let topOffset = -SPACE_BETWEEN_WINDOWS;
    let distances = [];
    let color = COLORS[Math.floor(Math.random() * COLORS.length)];

    for (let i = windows.length - 1; i >= 0; i--) {
        let window = windows[i];
        topOffset += window.offsetHeight + SPACE_BETWEEN_WINDOWS;
        let bubble = document.createElement("div");
        bubble.id = "bubble-" + i + "-" + counter;
        bubble.className = "bubble";
        bubble.style.width = diameter + "px";
        bubble.style.height = diameter + "px";
        bubble.style.top = topOffset + "px";
        bubble.style.left = leftOffset + "px";
        bubble.style.background = color;
        window.append(bubble);
        distances[i] = topOffset;
    }
    
    for (let i = 0; i < distances.length; i++) {
        let duration = time * ((distances[i] + hiddenOffset) / (topOffset + hiddenOffset));
        let id = "bubble-" + i + "-" + counter;
        gsap.to("#" + id, { duration: duration, top: -hiddenOffset, ease:Linear.easeNone, onComplete: () => {
            let element = document.getElementById(id);
            element.parentElement.removeChild(element);
        }});
    }

    counter++;
}

createBubble(MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE));
setInterval(() => {
    createBubble(MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE));
}, 2000);