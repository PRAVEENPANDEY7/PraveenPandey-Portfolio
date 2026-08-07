// TYPING EFFECT
const typedText = "Full-Stack Developer | Backend Engineer";
let i = 0;
function type() {
    if(i < typedText.length){
        document.getElementById("typed-text").innerHTML += typedText.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
window.onload = function() {
    type();
    initSummaryToggle();
};

// SUMMARY READ MORE / READ LESS TOGGLE
function initSummaryToggle() {
    const summaryEl = document.getElementById("summary-text");
    const readMoreBtn = document.getElementById("read-more-btn");
    const summaryCard = document.querySelector(".summary-card");
    
    if (summaryEl && readMoreBtn) {
        readMoreBtn.addEventListener("click", () => {
            if (summaryEl.classList.contains("collapsed")) {
                summaryEl.classList.remove("collapsed");
                if (summaryCard) summaryCard.classList.add("expanded");
                readMoreBtn.textContent = "Read Less ▴";
            } else {
                summaryEl.classList.add("collapsed");
                if (summaryCard) summaryCard.classList.remove("expanded");
                readMoreBtn.textContent = "Read More ✨";
            }
        });
    }
}

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

