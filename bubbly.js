const SPACE = 20;
const BUBBLE_DIAMETER = 75;

let windows = document.getElementsByClassName("window");
let bubbles = [];

let y = 0;
for (let i = windows.length - 1; i >= 0; i--) {
    let window = windows[i];
    let bubble = document.createElement("div");
    y += window.offsetHeight;
    bubble.id = "bubble-" + i;
    bubble.className = "bubble";
    bubble.style.top = y + "px";
    console.log( bubble.style.top)
    window.append(bubble)
    gsap.to("#bubble-" + i, {duration: 3 - i, top: -BUBBLE_DIAMETER, ease:Linear.easeNone});
}

