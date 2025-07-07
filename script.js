<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Choisis ton cadeau 🎁</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Section cachées au départ */
    #invitation, #endroit, #cadeau {
      display: none;
      margin-top: 25px;
      text-align: center;
    }

    #invitation {
      background: #ffb6c1;
      padding: 15px;
      border-radius: 15px;
      font-size: 1.2em;
      color: #800020;
      box-shadow: 0 0 10px #ff69b4;
    }

    #endroit img,
    #cadeau img {
      max-width: 300px;
      border-radius: 15px;
      box-shadow: 0 0 15px #ff69b4;
      margin-top: 15px;
    }

    #btn-endroit {
      display: none;
      margin-top: 15px;
      padding: 10px 20px;
      font-size: 1em;
      border-radius: 12px;
      background-color: #ff6fcf;
      border: none;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    #btn-endroit:hover {
      background-color: #f81fa8;
    }

    /* 💖 Pluie de cœurs */
    .falling-heart {
      position: fixed;
      top: -50px;
      font-size: 24px;
      animation: fall 4s linear;
      color: #ff69b4;
      z-index: 9999;
      pointer-events: none;
    }

    @keyframes fall {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💌 Et maintenant, un petit jeu !</h1>
    <p>Choisis ce que tu veux :</p>

    <div class="choices">
      <button id="btn-surprise">Une surprise</button>
      <button id="btn-bisou">Un bisou</button>
      <button id="btn-cadeau">Ton cadeau ! 🎁</button>
    </div>

    <!-- 🎉 Invitation surprise -->
    <div id="invitation">
      🎉 Surprise ! Tu es invitée à un dîner romantique au restaurant ce samedi soir à 19h. Prépare-toi à une soirée magique ! 🍽️❤️
    </div>

    <!-- 👀 Bouton pour voir le lieu -->
    <button id="btn-endroit">Voir où on va manger</button>

    <!-- 📍 Lieu du restaurant -->
    <div id="endroit">
      <h2>ELYSIUM</h2>
      <img src="images/elysium.jpg" alt="Restaurant ELYSIUM" />
    </div>

    <!-- 🎁 Le cadeau -->
    <div id="cadeau">
      <h2>Voici ton cadeau ! 🎁</h2>
      <img src="images/cadeau.jpg" alt="Cadeau surprise" />
    </div>

    <!-- 🔙 Retour -->
    <a href="index.html" class="btn">← Retour</a>
  </div>

  <script>
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
  </script>
</body>
</html>
