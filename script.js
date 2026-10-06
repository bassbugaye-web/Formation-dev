let catalogue = [
  { nom: "Paracétamol", prix: 500, stock: 10 },
  { nom: "Doliprane", prix: 1000, stock: 5 },
  { nom: "Vitamine C", prix: 1500, stock: 8 },
  { nom: "Aspirine", prix: 2000, stock: 3 },
  { nom: "Lait de corps", prix: 4400, stock: 2 }
];

let panier = [];

let conteneur = document.querySelector("#catalogue");
let compteur = document.querySelector("#compteur");
let panierAffiche = document.querySelector("#panier-affiche");

function afficherCatalogue() {
  conteneur.innerHTML = "";
  for (let i = 0; i < catalogue.length; i++) {
    conteneur.innerHTML += "<div class='produit'><strong>" + catalogue[i].nom + "</strong><br>" + catalogue[i].prix + " FCFA<br>Stock : " + catalogue[i].stock + "<br><button class='btn-ajouter' data-index='" + i + "'>Ajouter au panier</button></div>";
  }
}

function afficherPanier() {
  compteur.textContent = panier.length;
  panierAffiche.innerHTML = "";
  let total = 0;
  for (let j = 0; j < panier.length; j++) {
    panierAffiche.innerHTML += "<p>" + panier[j].nom + " - " + panier[j].prix + " FCFA <button class='btn-retirer' data-position='" + j + "'>Retirer</button></p>";
    total = total + panier[j].prix;
  }
  panierAffiche.innerHTML += "<p><strong>Total : " + total + " FCFA</strong></p>";
}

afficherCatalogue();
afficherPanier();

conteneur.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-ajouter")) {
    let index = e.target.getAttribute("data-index");
    panier.push(catalogue[index]);
    afficherPanier();
  }
});

panierAffiche.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-retirer")) {
    let position = e.target.getAttribute("data-position");
    panier.splice(position, 1);
    afficherPanier();
  }
});