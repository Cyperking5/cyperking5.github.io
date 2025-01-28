body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}

.canvas-container {
    margin: 20px auto;
    border: 2px solid #333;
    background-color: #fff;
    display: inline-block;
}

canvas {
    display: block;
    touch-action: none; /* Verhindert Standard-Touch-Verhalten wie Scrollen */
}

.controls {
    margin-top: 20px;
}

.controls label {
    margin-right: 10px;
}

.controls input[type="color"] {
    vertical-align: middle;
}

.controls input[type="range"] {
    vertical-align: middle;
}

.controls button {
    margin-left: 20px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
}

.controls input[type="file"] {
    margin-left: 20px;
}
