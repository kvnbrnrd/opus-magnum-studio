document.querySelector(".fader").addEventListener("click", fadeOverlay);

function fadeOverlay() {
    gsap.to(".overlay", {keyframes: [
        {opacity: 0, duration: 1},
        {visibility: "hidden", delay: 1}, //create a 0.5 second gap
      ], ease: "power3.inOut"});
}
