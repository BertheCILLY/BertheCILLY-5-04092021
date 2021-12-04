//Identification de l'id de l'article et récupération de l'id de la page
let params = (new URL(document.location)).searchParams;

//Stock de l'ID 
const id = params.get("id");

//Emplacement de l'html
let container = document.getElementById("container");

// Fonction envoie localStorage
const addLocalStorage = panier => {
  localStorage.setItem('panier', JSON.stringify(panier));
};

 //Création de la carte avec l'image , le titre la description et le prix en euro
const display = camera => {
  container.innerHTML +=`
    <div class="appareil" id="cardsProduct">
      <img src=${camera.imageUrl} alt="">
      <div class="description">
        <p class="nom">${camera.name}</p>
        <span class="appareilDescription">
          ${camera.description}
        </span>
        <select class="options" id ="option">
          <option>Choix options</option>
        </select>
        <p class="prix"> Prix Unitaire: ${camera.price/ 100}€</p>
        <select class="quantite" id="quantity">           
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>         
        <a href ="panier.html"><button type ="submit" id="panier" value="submit"> Ajouter au panier</button></a>
      </div>
    </div>
  `;
  //  Création des choix de l'option à chaque passage sur la boucle
  for (let lenses of camera.lenses){
    document.getElementById('option').innerHTML+=
    `<option value="1">${lenses}</option>`
  }
  // Ecouter l'évènement au "click"+ FNCT addProductBasket
  document.getElementById('panier').addEventListener('click', function () {
    addProductBasket(camera)

  });console.log(camera);
};


   // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau , puis on le renvoit vers le localStorage avec le nouveau produit ajouté .

//Pour ajouter au panier
const addProductBasket = camera=> {
  camera.quantity = parseInt(document.getElementById('quantity').value);

  //RECUPERE PANIER//memo : let variable=(condition)? "valeur si vrai": "valeur si faux"
  let panier = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : [];//si le panier est null tu me crée un tableau vide,      

  //Boucle FOR parcour la ligne panier
  let cameraExistIndex = false;
  for (let i = 0; i < panier.length; i++) {
    let product = panier[i];
    //Condition si le produit existe
    if (product.id === camera.id) {
      cameraExistIndex = i;
    }
    
  };
  // SI Caméra existe dans le panier, 
  if (false !== cameraExistIndex) {//Si j'ai 0, la valeur qui sera retourné sera 1 et si j'ai un ce sera 0
    panier[cameraExistIndex].quantity = parseInt(panier[cameraExistIndex].quantity) + camera.quantity;
  } else {
    panier.push(camera);
  };
  addLocalStorage(panier)
};

   // récupération des données et affichage
  fetch("http://localhost:3000/api/cameras/" + id)
  .then(response => response.json())
  .then(function (product) {
    let camera = new Camera(product)// appel de l'instance de classe formulaire pour crer l'objet
    display(camera);
        })
        // SI PROBLEME API
        .catch(function(err){
          console.log("fetch Error")
      });
