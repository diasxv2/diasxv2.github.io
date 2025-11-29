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

document.querySelector(".contact-box").addEventListener("submit", e => {
    e.preventDefault();

    const success = document.getElementById("successMessage");

    success.classList.add("show");

    setTimeout(() => {
        success.classList.remove("show");
    }, 3000);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("TON_SERVICE_ID", "TON_TEMPLATE_ID", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(() => {
        document.getElementById("successMessage").classList.add("show");
    })
    .catch(() => {
        alert("Erreur d’envoi.");
    });
});

const box = document.querySelector(".contact-box");

box.addEventListener("mousemove", e => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 40).toFixed(2);
    const rotateY = (x / 40).toFixed(2);

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

box.addEventListener("mouseleave", () => {
    box.style.transform = "rotateX(0deg) rotateY(0deg)";
});

emailjs.send(
  "service_cnri5vx",
  "template_je1a11y",
  {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  },
  "2OcpYEny95PXmY7gw"
);

