// Get the canvas element and its context
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;

// Event listeners for mouse actions
canvas.addEventListener("mousedown", () => {
    isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath(); // Start a new path after releasing the mouse button
});

canvas.addEventListener("mousemove", draw);

// Function to draw on the canvas
function draw(event) {
    if (!isDrawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
}

// Clear the canvas
document.getElementById("clearButton").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
