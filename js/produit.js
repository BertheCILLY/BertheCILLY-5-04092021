
//Identification de l'id de l'article et récupération de l'id de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');


// récupération des données et affichage
console.log('http://localhost:3000/api/teddies/$ { +id}')

console.log('http://localhost:3000/api/teddies/'+id)
fetch('http://localhost:3000/api/teddies/'+id)

.then(function(response) {
    return response.json();
  
}).then(function(data){
 console.log(data);

document.getElementById("image").src = data.imageUrl;
document.getElementById("titre").textContent= data.name;
document.getElementById("description").textContent= data.description;
document.getElementById("prix").textContent= data.price + ' €';

console.log(data.colors)

let choix_1 = document.createElement("option");
choix_1.setAttribute("value", data.colors[0]);
choix_1.textContent = 'la couleur ' + data.colors[0];
document.getElementById("color-select").appendChild(choix_1);

let choix_2 = document.createElement("option");
choix_2.setAttribute("value", "colors_2");
choix_2.textContent = 'la couleur ' + "colors_2";
document.getElementById("color-select").appendChild(choix_2);
})
//selection de la classe où je vais injecter le code HTML

/*

const structureProduit = `



  <div class="product-card">
  <div class="product-card__img">
      <img src="${id.urlPhoto}" alt="" class="img">
  </div>
  <div class="product-card__infos">
  <div class = "${id.nomproduit}"></div>
      <div class="${id.description}"></div>
      <div class="${id.price}"></div>ce"></div>
      <div class="${id.quantity}">
         
             <label for="bearNum">Quantité :</label>
         
             <input id="bearNum" type="number" name="bearNum" value="1" min="1">
          
        
      </div>

      <div class="product-card__infos__color">
      <form>
          <label for="color-select">Couleur :</label>
          <select name="color" id="color-select">
              <option value="${id.option_1}">Black</option >
              <option value="${id.option_2}">White</option >   
               <option value="${id.option_3}">Tan</option >
               <option value="${id.option_4}">Chocolate</option >
                <option value="${id.option_5}">Pink</option >
                <option value="${id.option_6}">Blue</option >
                <option value="${id.option_7}">Beige</option > 
                <option value="${id.option_8}">Brown</option > 
                <option value="${id.option_9}">Pale Brown</option >
                <option value="${id.option_10}">Dark Brown</option > 

          </select>
      </form>
      </div>
      <div class="added-to-cart-confirmation">
          <p class="confirmation-text"></p>
      </div>
      <div class="product-card__infos__buttons">
          <a href="index.html">
              <div class="product-card__infos__button back-to-home">
                  Page d'Accueil
              </div>
          </a>
          <a href="#">
              <div class="product-card__infos__button add-to-cart">
                  Ajouter au panier
              </div>
          </a>
      </div>
  </div>
</div>

  `


console.log(structureProduit)
positionElement.innerHTML = structureProduit;
    // ajout de l'événement sur le bouton

    button.addEventListener('click', function(event) {

      if (localStorage.getItem('panier') == null) {
          localStorage.setItem('panier', JSON.stringify([]));
      }

      let contenuProduit = {
          id : data._id,
          name : data.name,
          price : data.price,
          color : colorChoice,
          img : data.imageUrl
      };
 //ajout au panier
 let panier  = localStorage.getItem('panier');
 panier = JSON.parse(panier);

 panier.push(contenuProduit)
 
 localStorage.setItem('panier', JSON.stringify(panier));
});


const productCardImg = document.querySelector(".img");
const productCardImg = document.querySelector(".product-card__img ");
const productCardName = document.querySelector(".product-card__infos__title ");
const productCardDescription = document.querySelector(".product-card__infos__description");

const productCardPrice = document.querySelector(".product-card__infos__price ");
const bearNumber = document.querySelector("#bearNum");
const colorSelect = document.querySelector("#color-select");




function checkIf404() {
  window.addEventListener("error", (e) => {
      let container = document.querySelector(".container");
      container.innerHTML = `<p>Erreur <a class="back-to-home" href="index.html">Retourner dans la boutique ?</a></p>`;
      container.style.padding = "40vh 0";
      container.style.fontSize = "26px";
      let backToHomeLink = document.querySelector(".back-to-home");
      backToHomeLink.style.textDecoration = "underline";
    },
    true
  );
}


      // Formatage du prix pour l'afficher en euros
      article.price = article.price / 100;
      productCardPrice.innerText = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(article.price);

      let colorSelect = document.getElementById("color-select");
      // on lance une boucle pour que i ne soit jamais le même à chaque passage la couleur change, on affiche ainsi tous les objets dans la page web
      for (let i = 0; i < article.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = article.colors[i];
        colorSelect.appendChild(option);
      
    };

function addToCart() {
  const addToCartBtn = document.querySelector(".add-to-cart");
  const confirmation = document.querySelector(".added-to-cart-confirmation");
  const textConfirmation = document.querySelector(".confirmation-text");
  // Compilation des données avant le Click grace à CLICK(e)
  addToCartBtn.addEventListener("click", () => {
    if (bearNumber.value > 0 && bearNumber.value < 100) {
      // ------ Création du produit qui sera ajouté au panier
      let productAdded = {
        name: productCardName.innerHTML,
        price: parseFloat(productCardPrice.innerHTML),
        quantity: parseFloat(document.querySelector("#bearNum").value),
        _id: id,
      };

      // ----------------- Gestion du localStorage
      let arrayProductsInCart = [];
      
      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("products") !== null) {
        arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
    
        
        // Si le localStorage  est vide, on le crée avec le produit ajouté
      } 
        arrayProductsInCart.push(productAdded);
        localStorage.setItem("products", JSON.stringify(arrayProductsInCart));



        

      }
    });
  
  }

  */
