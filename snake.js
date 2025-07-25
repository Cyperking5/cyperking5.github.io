const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let apple = { x: 15, y: 15 };
let direction = { x: 0, y: 0 };
let score = 0;
let gameID = "ID-" + Math.random().toString(36).substr(2, 6);

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffee";
  snake.forEach(part => {
    ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize-2, gridSize-2);
  });

  ctx.fillStyle = "red";
  ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize-2, gridSize-2);

  ctx.fillStyle = "#00ffee";
  ctx.font = "16px Courier";
  ctx.fillText("Score: " + score, 10, 20);
  ctx.fillText("ID: " + gameID, 10, 40);
}

function update() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (head.x === apple.x && head.y === apple.y) {
    snake.unshift(head);
    apple = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
    score++;
  } else {
    snake.pop();
    snake.unshift(head);
  }

  if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount ||
      snake.slice(1).some(p => p.x === head.x && p.y === head.y)) {
    alert("Game Over! Score: " + score + "\nYour ID: " + gameID);
    snake = [{ x: 10, y: 10 }];
    direction = { x: 0, y: 0 };
    score = 0;
    gameID = "ID-" + Math.random().toString(36).substr(2, 6);
  }
}

function loop() {
  update();
  draw();
}

setInterval(loop, 150);

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && direction.y === 0) direction = { x: 0, y: -1 };
  if (e.key === "ArrowDown" && direction.y === 0) direction = { x: 0, y: 1 };
  if (e.key === "ArrowLeft" && direction.x === 0) direction = { x: -1, y: 0 };
  if (e.key === "ArrowRight" && direction.x === 0) direction = { x: 1, y: 0 };
});

// Touch & Mouse Support
let touchStartX = 0, touchStartY = 0;
canvas.addEventListener("touchstart", e => {
  const t = e.touches[0];
  touchStartX = t.clientX;
  touchStartY = t.clientY;
});
canvas.addEventListener("touchend", e => {
  const t = e.changedTouches[0];
  const dx = t.clientX - touchStartX;
  const dy = t.clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0 && direction.x === 0) direction = { x: 1, y: 0 };
    else if (dx < 0 && direction.x === 0) direction = { x: -1, y: 0 };
  } else {
    if (dy > 0 && direction.y === 0) direction = { x: 0, y: 1 };
    else if (dy < 0 && direction.y === 0) direction = { x: 0, y: -1 };
  }
});

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const dx = cx - centerX;
  const dy = cy - centerY;

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0 && direction.x === 0) direction = { x: 1, y: 0 };
    else if (dx < 0 && direction.x === 0) direction = { x: -1, y: 0 };
  } else {
    if (dy > 0 && direction.y === 0) direction = { x: 0, y: 1 };
    else if (dy < 0 && direction.y === 0) direction = { x: 0, y: -1 };
  }
});
