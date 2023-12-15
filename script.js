/**
 * @type {HTMLCanvasElement}
 */
// set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// set canvas height and width to window height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// define global mouse object to use
const mouse = {
    x: undefined,
    y: undefined,
};

// clear the canvas button
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleArray.length = 0;
});

// resize the canvas to fit the window if the user resizes the window
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// create a particle system where the user clicks their mouse on the canvas
canvas.addEventListener("click", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    initParticles(getRandomFloat(4, 55));
});

// not currently using, but could have a trail of particles follow the mouse
canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// store the particles in this array
const particleArray = [];

// particle class
class Particle {
    constructor() {
        // define x and y coordinates
        this.x = mouse.x;
        this.y = mouse.y;
        // size
        this.size = getRandomFloat(2, 70);
        // x and y speed
        this.speedX = getRandomFloat(-2, 2);
        this.speedY = getRandomFloat(-2, 2);
    }

    update() {
        // make the circles move
        this.x += this.speedX;
        this.y += this.speedY;

        // have the circles change direction randomly
        const changeDirectionProbability = 0.005;
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
