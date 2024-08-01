const BACKGROUND_COLORS_ARRAY = ['blue', 'cyan', 'gold', 'green', 'magenta', 'orange', 'red', 'yellow'];

const randomColorIndex = Math.floor(Math.random() * BACKGROUND_COLORS_ARRAY.length)

let randomBackgroundColor = BACKGROUND_COLORS_ARRAY[randomColorIndex];

document.body.style.background = randomBackgroundColor;

console.log(randomBackgroundColor);