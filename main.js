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

document.querySelector(".contact-box").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message envoyé !");
});

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// Volume bas dès le début
music.volume = 0.10;

btn.addEventListener("click", () => {
    if (music.muted) {
        music.muted = false;
        btn.textContent = "🔊";
    } else {
        music.muted = true;
        btn.textContent = "🔈";
    }
});

