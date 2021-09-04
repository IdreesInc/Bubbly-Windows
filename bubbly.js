const SPACE = 20;
const BUBBLE_DIAMETER = 75;
const TOTAL_TIME = 3;

let windows = document.getElementsByClassName("window");
let bubbles = [];
let distances = [];

let y = -SPACE;
for (let i = windows.length - 1; i >= 0; i--) {
    let window = windows[i];
    y += window.offsetHeight + SPACE;
    let bubble = document.createElement("div");
    bubble.id = "bubble-" + i;
    bubble.className = "bubble";
    bubble.style.top = y + "px";
    window.append(bubble)
    distances[i] = y;
}

for (let i = 0; i < distances.length; i++) {
    let distance = distances[i];
    let duration = TOTAL_TIME * ((distance + BUBBLE_DIAMETER) / (y + BUBBLE_DIAMETER));
    gsap.to("#bubble-" + i, {duration: duration, top: -BUBBLE_DIAMETER, ease:Linear.easeNone});
}