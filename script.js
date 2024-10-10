// Mail Service ID : service_rsi6fy4

const nonButton = document.getElementById("non");
const ouiButton = document.getElementById("oui");

// Faire bouger le bouton "non"
nonButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - nonButton.clientWidth);
  const y = Math.random() * (window.innerHeight - nonButton.clientHeight);

  nonButton.style.left = `${x}px`;
  nonButton.style.top = `${y}px`;
  nonButton.style.position = "absolute";
});

// Action sur le bouton "oui"
ouiButton.addEventListener("click", () => {
  // Efface tout le contenu de la page
  document.body.innerHTML = "<h1>J'étais sûr que tu allais dire oui !</h1>";

  // Ajouter du style au message final
  document.body.style.backgroundColor = "#f8bbd0";
  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.paddingTop = "100px";
  document.querySelector("h1").style.color = "#ec407a";
  document.querySelector("h1").style.fontSize = "3.5rem";

  // Ajouter un champ de date pour demander la disponibilité
  document.body.innerHTML += `
        <p>Quand serais-tu disponible pour qu'on se voie ?</p>
        <input type="date" id="dispo" />
        <button id="submitDispo">Envoyer</button>
        <div id="gif-container"></div> <!-- Conteneur pour le GIF -->
      `;

  // Ajouter un style au formulaire
  document.querySelector("p").style.fontSize = "1.5rem";
  document.querySelector("input").style.padding = "10px";
  document.querySelector("input").style.margin = "20px";
  document.querySelector("input").style.fontSize = "1rem";
  document.querySelector("button").style.padding = "10px 20px";
  document.querySelector("button").style.fontSize = "1rem";
  document.querySelector("button").style.backgroundColor = "#ec407a";
  document.querySelector("button").style.color = "#fff";
  document.querySelector("button").style.border = "none";
  document.querySelector("button").style.borderRadius = "5px";
  document.querySelector("button").style.cursor = "pointer";

  // Ajouter un placeholder
  const dateInput = document.getElementById("dispo");
  dateInput.setAttribute("placeholder", "Choisis un jour !");

  // Ajouter un écouteur d'événement pour le bouton "Envoyer"
  document.getElementById("submitDispo").addEventListener("click", () => {
    const dispo = document.getElementById("dispo").value;
    const gifContainer = document.getElementById("gif-container"); // Conteneur pour le GIF
    gifContainer.innerHTML = ""; // Effacer le GIF précédent

    if (dispo) {
      const dateObj = new Date(dispo);
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = dateObj.toLocaleDateString("fr-FR", options);

      document.body.innerHTML = `
            <h1>Super ! J'ai hâte de te voir le ${formattedDate} !</h1>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RwcXVjdzMwZ29kY2g4bGg5ZXJ6Z2ZjMmJkdGV5OTRrOXVkNTR1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qCT06WLJURMyfsEi2r/giphy.gif" alt="Gif mignon" style="max-width: 350px; margin-top: 20px;" />
          `;
      // Ajuster les styles pour le message final
      document.querySelector("h1").style.color = "#ec407a";
      document.querySelector("h1").style.fontSize = "2.5rem";
      document.querySelector("p").style.fontSize = "1.5rem";
    } else {
      alert("S'il te plaît, indique ta disponibilité !");
    }
  });

  // Ajouter un GIF sous le champ de date
  const gifElement = document.createElement("img");
  gifElement.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXBvYW8xNTU1NWowYmVzaGl4NmZoNmxwdG1mM2RmdXJqYW0yMm1jbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif";
  gifElement.alt = "Gif mignon";
  gifElement.style.maxWidth = "400px";
  gifElement.style.marginTop = "20px";

  // Ajouter le GIF au conteneur
  document.getElementById("gif-container").appendChild(gifElement);
});

// Fonction pour créer des cœurs flottants
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Position aléatoire
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Entre 3 et 6 secondes

  // Ajoute le cœur au conteneur
  document.getElementById("hearts-container").appendChild(heart);

  // Retirer le cœur après l'animation
  setTimeout(() => {
    heart.remove();
  }, 6000); // Correspond à la durée maximale de l'animation
}

// Créer des cœurs régulièrement
setInterval(createHeart, 500); // Un nouveau cœur toutes les 0.5 secondes
