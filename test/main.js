const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let squareY = 0; // Initial vertical position of the square
const squareSize = 30; // Size of the square
const gravity = 2; // Speed of falling
let speed = gravity;

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = 'red'; // Set the color to red
    ctx.fillRect((canvas.width - squareSize) / 2, squareY, squareSize, squareSize); // Draw the square
}

function update() {
    speed += gravity;
    squareY += speed; // Update the position of the square
    if (squareY > canvas.height) {
        squareY = 0; // Reset the square to the top when it falls off the canvas
        speed = 0;
    }
    drawSquare(); // Draw the square
    requestAnimationFrame(update); // Call update again for the next frame
}

update(); // Start the animation