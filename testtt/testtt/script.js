// Rain Drop Generator
(function() {
    const layer = document.getElementById("rainLayer");
    const count = Math.min(Math.floor(window.innerWidth / 30), 40);

    for (let i = 0; i < count; i++) {
        const drop = document.createElement("div");
        const width = 1 + Math.random() * 2;
        const height = 10 + Math.random() * 20;
        
        Object.assign(drop.style, {
            position: "absolute",
            width: width + "px",
            height: height + "px",
            top: "-30px",
            left: Math.random() * 100 + "%",
            background: "linear-gradient(180deg, rgba(180,220,240,0.3), rgba(74,159,216,0.5))",
            borderRadius: "50px",
            opacity: 0.4 + Math.random() * 0.3
        });

        drop.animate([
            { 
                transform: "translateY(0) scaleY(1)",
                opacity: 0.7
            },
            { 
                transform: `translateY(${window.innerHeight + 50}px) scaleY(1.2)`,
                opacity: 0.3
            }
        ], {
            duration: (2 + Math.random() * 3) * 1000,
            iterations: Infinity,
            easing: "linear",
            delay: Math.random() * 2000
        });

        layer.appendChild(drop);
    }
})();

// Theme Toggle
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement.style;

themeBtn.addEventListener("click", () => {
    const isToggled = themeBtn.classList.toggle("toggled");
    
    if (isToggled) {
        root.setProperty("--accent", "#3a8fc8");
        root.setProperty("--bg-1", "#d8e8f2");
        root.setProperty("--bg-2", "#c4dce8");
    } else {
        root.setProperty("--accent", "#4a9fd8");
        root.setProperty("--bg-1", "#e8f4f8");
        root.setProperty("--bg-2", "#d4e8f0");
    }
});