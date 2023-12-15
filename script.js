/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// draw a circle with clicks
// draw a circle paintbrush
// draw a circle using requestanimation frame
// have a circle follow the mouse
// create a particle system that shows circles based on the mouse
// have them get smaller
// draw lines between the particles
// introduce sinusoidal motion
// have them bounce off the walls

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: undefined,
    y: undefined,
};

// clear the canvas
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleArray.length = 0;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.addEventListener("click", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    initParticles(getRandomFloat(4, 25));
});

canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

const particleArray = [];
class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = getRandomFloat(2, 70);
        this.speedX = getRandomFloat(-2, 2);
        this.speedY = getRandomFloat(-2, 2);
    }

    update() {
        // make the circles move
        this.x += this.speedX;
        this.y += this.speedY;

        // have the circles change direction
        const changeDirectionProbability = 0.01;
        if (Math.random() < changeDirectionProbability) {
            this.speedX = getRandomFloat(-2, 2);
            this.speedY = getRandomFloat(-2, 2);
        }

        // make the circles shrink
        if (this.size > 0.2) this.size -= getRandomFloat(-0.01, 0.05);

        // bounce off the walls
        if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
            this.speedX *= -1;
        }
        if (this.y + this.size >= canvas.height || this.y - this.size <= 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = this.size * 0.05;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function initParticles(n) {
    for (let i = 0; i < n; i++) {
        particleArray.push(new Particle());
    }
}

function handleParticles() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();

        for (let j = i + 1; j < particleArray.length; j++) {
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.hypot(dx, dy);

            if (distance < 200) {
                ctx.beginPath();
                ctx.moveTo(particleArray[i].x, particleArray[i].y);
                ctx.quadraticCurveTo(
                    particleArray[i].x + distance,
                    particleArray[i].y + distance,
                    particleArray[j].x,
                    particleArray[j].y
                );
                ctx.stroke();
            }
        }

        if (particleArray[i].size <= 0.2) {
            particleArray.splice(i, 1);
            i--;
        }
    }
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();
