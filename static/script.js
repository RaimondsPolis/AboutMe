const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Ensure canvas resizes on page load

let squares = [];

class Square {
    constructor(x, y, size, speed, rotation) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.rotation = rotation;
    }

    update() {
        this.rotation += this.speed;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function init() {
    squares = []; // Clear squares
    for (let i = 0; i < 50; i++) {
        let size = Math.random() * 30 + 10;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speed = (Math.random() - 0.5) * 0.02;
        let rotation = Math.random() * Math.PI * 2;
        squares.push(new Square(x, y, size, speed, rotation));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    squares.forEach(square => {
        square.update();
        square.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
