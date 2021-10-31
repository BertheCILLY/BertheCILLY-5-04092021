
//Identification de l'id de l'article et récupération de l'id de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

// récupération des données et affichage

fetch('http://localhost:3000/api/teddies/'+id)

.then(function(response) {
    return response.json();
  
}).then(function(data){
 console.log(data);
//Création de la carte avec l'image , le titre la description et le prix en euro
document.getElementById("image").src = data.imageUrl;
document.getElementById("titre").textContent= data.name;
document.getElementById("description").textContent= data.description;
document.getElementById("prix").textContent= data.price + ' €';
console.log(data.colors)

//  Création des choix de couleur à chaque passage sur la boucle

let option = document.createElement('option');
for (let i=0; i < data.colors.length; i++) {
    console.log(data.colors[i])
    option = document.createElement('option');
option.setAttribute('value', data.colors[i]);
option.textContent = data.colors[i];
document.getElementById("color-select").appendChild(option);

console.log(data.colors);
}
// Sélection de l'id du produit 
const idform = document.querySelector("#bearNum");



let newElement = document.createElement('div');
let element = document.getElementById('ours-section');

console.log(newElement);

newElement.classList.add('ours-detail');
newElement.classList.add('text-center');
element.appendChild(newElement);

teddyRecap(data, newElement);

 //création du bouton panier

 let button = document.createElement('button');
 button.innerText = 'Ajouter au panier';
 button.classList.add('ours-button');
 newElement.appendChild(button);

 console.log(button)


 
});
