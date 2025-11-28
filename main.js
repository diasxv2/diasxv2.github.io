document.addEventListener("DOMContentLoaded", () => {

  // Effet 3D
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / 20).toFixed(2);
      const rotateY = (x / 20).toFixed(2);

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });

  // Formulaire
  document.querySelector(".contact-box")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message envoyé !");
  });

  // 🎵 Musique
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (music && btn) {
    music.volume = 0.20;

    btn.addEventListener("click", () => {
      music.muted = !music.muted;
      btn.textContent = music.muted ? "🔈" : "🔊";
    });
  }

  
  
});

// Random micro-glitches: temporarily toggle a stronger transform on top/bottom
(function randomGlitch() {
  const top = document.querySelector('.glitch-logo .top');
  const bottom = document.querySelector('.glitch-logo .bottom');

  if (!top || !bottom) return;

  function triggerOnce() {
    // short random clip + translate
    top.style.transition = 'transform 120ms ease, opacity 120ms';
    bottom.style.transition = 'transform 120ms ease, opacity 120ms';

    top.style.transform = `translate3d(${rand(-10,6)}px, ${rand(-6,6)}px, 0) skew(${rand(-1,1)}deg)`;
    bottom.style.transform = `translate3d(${rand(-6,10)}px, ${rand(-4,4)}px, 0) skew(${rand(-1,1)}deg)`;

    // flash opacity for a quick glitch
    top.style.opacity = 0.75;
    bottom.style.opacity = 0.65;

    setTimeout(() => {
      top.style.transform = '';
      bottom.style.transform = '';
      top.style.opacity = '';
      bottom.style.opacity = '';
    }, rand(120, 420));
  }

  function loop() {
    // interval random between glitches
    setTimeout(() => {
      // sometimes multiple quick glitches
      const times = Math.random() > 0.7 ? rand(1,3) : 1;
      for (let i = 0; i < times; i++) {
        setTimeout(triggerOnce, i * rand(80,180));
      }
      loop();
    }, rand(900, 3500));
  }

  function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  loop();
})();

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("terminal-loader").style.opacity = "0";
        document.getElementById("terminal-loader").style.transition = "0.5s";
        
        setTimeout(() => {
            document.getElementById("terminal-loader").remove();
            document.body.classList.remove("loading");
        }, 600);
    }, 4000); // Durée totale du loader (modifiable)
});


