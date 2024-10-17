const scoreJoueur = document.querySelector("#scoreJoueur");
const scoreOrdinateur = document.querySelector("#scoreOrdinateur");
const resultat = document.querySelector("#resultat");
const choixBtns = document.querySelectorAll(".choixBTN");

let joueur;
let ordinateur;
let msgResultat;
let scoreJoueurValeur = 0;
let scoreOrdinateurValeur = 0;

choixBtns.forEach((button) =>
  button.addEventListener("click", () => {
    joueur = button.getAttribute("data-choice");
    genererChoixOrdinateur();
    calculerScore();
    verifierFinPartie();
  })
);

function genererChoixOrdinateur() {
  const nombreAleatoire = Math.floor(Math.random() * 3) + 1;

  switch (nombreAleatoire) {
    case 1:
      ordinateur = "PIERRE";
      break;
    case 2:
      ordinateur = "PAPIER";
      break;
    case 3:
      ordinateur = "CISEAUX";
      break;
  }
}

function calculerScore() {
  if (joueur === ordinateur) {
    msgResultat = `Egalité ! Vous avez tous deux choisi ${joueur}.`;
  } else if (
    (joueur === "PIERRE" && ordinateur === "CISEAUX") ||
    (joueur === "PAPIER" && ordinateur === "PIERRE") ||
    (joueur === "CISEAUX" && ordinateur === "PAPIER")
  ) {
    msgResultat = `Vous gagnez ! ${joueur} bat ${ordinateur}.`;
    scoreJoueurValeur++;
  } else {
    msgResultat = `Vous perdez! ${ordinateur} bat ${joueur}.`;
    scoreOrdinateurValeur++;
  }

  resultat.textContent = msgResultat;
  scoreJoueur.textContent = `Votre score : ${scoreJoueurValeur}`;
  scoreOrdinateur.textContent = `Score de l'ordinateur : ${scoreOrdinateurValeur}`;
}


function verifierFinPartie() {
    if (scoreJoueurValeur === 5) {
        resultat.textContent = "Félicitations, vous avez gagné la partie !";
        desactiverBoutons();
    } else if (scoreOrdinateurValeur === 5) {
        resultat.textContent = "L'ordinateur a gagné la partie !";
        desactiverBoutons();
    }
}

function desactiverBoutons() {
    choixBtns.forEach(button => button.disabled = true);
}