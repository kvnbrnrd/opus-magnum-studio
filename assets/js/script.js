// Fondu de la bannière
document.querySelector(".fader").addEventListener("click", fadeOverlay);

function fadeOverlay() {
    gsap.to(".overlay", {keyframes: [
        {opacity: 0, duration: 1},
        {visibility: "hidden", delay: 1}, 
      ], ease: "power3.inOut"});
}

var mq = window.matchMedia( "(max-width: 1080px)" );
if (mq.matches) {
  document.getElementById("overlay-bg").src="img/OMS-mobile-ban.jpg";
}
else {
  document.getElementById("overlay-bg").src="img/OMS-ban.jpg";
}


// Animation de la sinusoïde
var wrapper = document.querySelector(".svg-wrapper");
TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", {x:10, y:30});

var svg   = document.querySelector("svg");
var wave  = document.querySelector("#wave");
var width = 250;

var amplitude = 30;
var frequency = 10;
var segments  = 150;
var interval  = width / segments;

for (var i = 0; i < segments; i++) {
  
  var norm  = i / segments;  
  var point = wave.points.appendItem(svg.createSVGPoint());
  
  point.x = i * interval;
  point.y = amplitude / 2;
  
  TweenMax.to(point, 0.8, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);
}

