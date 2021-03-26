document.querySelector(".fader").addEventListener("click", fadeOverlay);

function fadeOverlay() {
    gsap.to(".overlay", {keyframes: [
        {opacity: 0, duration: 1},
        {visibility: "hidden", delay: 1}, //create a 0.5 second gap
      ], ease: "power3.inOut"});
}
var wrapper = document.querySelector(".svg-wrapper");
TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", {x:10, y:30});

var svg   = document.querySelector("svg");
var wave  = document.querySelector("#wave");
var width = 350;

var amplitude = 30;
var frequency = 15;
var segments  = 200;
var interval  = width / segments;

for (var i = 0; i < segments; i++) {
  
  var norm  = i / segments;  
  var point = wave.points.appendItem(svg.createSVGPoint());
  
  point.x = i * interval;
  point.y = amplitude / 2;
  
  TweenMax.to(point, 0.8, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);
}

