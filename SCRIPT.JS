// TYPING EFFECT
const typedText = "Java Developer | UI/UX Designer | Full Stack Developer";
let i = 0;
function type() {
    if(i < typedText.length){
        document.getElementById("typed-text").innerHTML += typedText.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
window.onload = type;

// PARTICLES JS
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 50},
        "color": {"value": "#4da6ff"},
        "shape": {"type": "circle"},
        "opacity": {"value": 0.3},
        "size": {"value": 3},
        "line_linked": {"enable": true, "distance": 120, "color": "#4da6ff", "opacity": 0.2, "width": 1},
        "move": {"enable": true, "speed": 1}
    },
    "interactivity": {
        "events": {"onhover": {"enable": true, "mode": "grab"}}
    }
});
