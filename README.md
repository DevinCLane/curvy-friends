# Curvy Friends

<img width="400" alt="Screenshot 2023-12-14 at 8 12 15 PM" src="https://github.com/DevinCLane/curvy-friends/assets/8145785/0a0a76fb-0ad9-4c0d-8f4a-f1efe7ae8cef">

https://github.com/DevinCLane/curvy-friends/assets/8145785/bbe8c68f-1cfd-4a7a-9605-ce5d45b3ae41

Welcome. Immerse yourself in an enchanting world of particles that dance and bounce with every click. This dynamic art piece uses the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and JavaScript to create an undulating sea of circles and quadratic curves.

## Features

-   Click-to-spawn particles: Create a burst of circles and curves with every click.
-   Dynamic particle movement: Delight in particles bouncing off the walls and changing direction based on probability.
-   Diverse particle size and speed: Little ones, big ones, slow ones, fast ones, shrinking ones--watch the different particles play together.
-   Clear canvas button: everything needs an off switch 😅. Tired of it? Click "Clear" and--poof!--it's gone.

## Technical Details

-   Built with core web APIs and HTML, CSS, and JavaScript. No libraries or frameworks.
-   Uses `requestAnimationFrame` for animations:

    ```javascript
    function animate() {
        // clears the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // calls the `draw` and `update` methods on the `Particle` object
        handleParticles();
        // creates our animation loop
        requestAnimationFrame(animate);
    }
    animate();
    ```

-   Features a custom `Particle` class to manage the particle behavior
-   Collision detection: bounces particles off the walls based on their x and y coordinates. (Ensures inclusion of the radius of the circle when calculating when to bounce the particle in the other direction.)
-   Utilizes Pythagorean Theorem to calculate distance between particles and draw lines based on proximity
-   Randomized direction change: change particle direction based on a percent probability.
-   Sinusoidal motion: use sine and cosine to create an oscillating effect to the particle's motion.
    ```JavaScript
    this.x +=
                Math.sin(
                    Date.now() * this.oscillationSpeedX + this.oscillationOffsetX
                ) * this.oscillationAmplitudeX;
    ```

## Further Optimizations

-   Introduce a variety of shapes, such as squares, triangles or pentagons with a random possibility of each one appearing.
-   Weighted randomization: perhaps favor one shape over another to make newer shapes more exciting when they appear.
-   Add more chaos to the movement of the particles. Use sinusoidal motion or other subtle forces that change the movement of the particles.
-   Gravitational pull: create a center of gravity for the system to pull the particles in a certain direction.
-   Attraction and repulsion: cause particles to attract or repel each other based on size/shape/speed to create clumping and scattering patterns.
-   Add variety in the line drawing type (dashed, dotted, etc)
-   Color: add a user-modifiable color palette option
-   Add audio: create generative audio that is informed by the data of the system.
-   SVG export using [Canvas Sketch](https://github.com/mattdesl/canvas-sketch)
-   User modifiable parameters via [Sketchbook](https://skbk.cc/#/)

## Prior Art and Inspiration

-   Developed, adapted, remixed from work by [Frank's Laboratory](https://youtu.be/Yvz_axxWG4Y?si=Qyb8dazwMFmjCSSN), and [The Coding Train](https://www.youtube.com/@TheCodingTrain)
