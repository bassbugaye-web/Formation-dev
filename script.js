let catalogue = [
  { nom: "Paracétamol", prix: 500, stock: 10 },
  { nom: "Doliprane", prix: 1000, stock: 5 },
  { nom: "Vitamine C", prix: 1500, stock: 8 },
  { nom: "Aspirine", prix: 2000, stock: 3 },
  { nom: "Lait de corps", prix: 4400, stock: 2 }
];

let conteneur = document.querySelector("#catalogue");


for (let i = 0; i < catalogue.length; i++) {
  conteneur.innerHTML += "<div class='produit'><strong>" + catalogue[i].nom + "</strong><br>" + catalogue[i].prix + " FCFA<br>Stock : " + catalogue[i].stock + "</div>";
}