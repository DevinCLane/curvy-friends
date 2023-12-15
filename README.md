# Curvy Friends

https://github.com/DevinCLane/curvy-friends/assets/8145785/0e451258-d5c8-4969-9f3d-6dd08fdde8ff

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
