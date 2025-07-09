const btnSurprise = document.getElementById('btn-surprise');
const invitation = document.getElementById('invitation');
const btnEndroit = document.getElementById('btn-endroit');
const endroit = document.getElementById('endroit');
const btnCadeau = document.getElementById('btn-cadeau');
const cadeau = document.getElementById('cadeau');

// 🎁 Afficher la surprise
btnSurprise.addEventListener('click', () => {
  invitation.style.display = 'block';
  btnEndroit.style.display = 'inline-block';
  endroit.style.display = 'none';
  cadeau.style.display = 'none';
});

// 📍 Afficher l’endroit
btnEndroit.addEventListener('click', () => {
  endroit.style.display = 'block';
  btnEndroit.style.display = 'none';
  cadeau.style.display = 'none';
});

// 🎁 Afficher le cadeau
btnCadeau.addEventListener('click', () => {
  cadeau.style.display = 'block';
  endroit.style.display = 'none';
  invitation.style.display = 'none';
  btnEndroit.style.display = 'none';
});

// 💖 Pluie infinie de cœurs
setInterval(() => {
  const heart = document.createElement("div");
  const emojis = ["💖", "💘", "💝", "💞", "💓"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  heart.classList.add("falling-heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  heart.style.animationDuration = (Math.random() * 2 + 4) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);
