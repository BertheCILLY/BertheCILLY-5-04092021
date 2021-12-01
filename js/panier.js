

// Récupération de panier dans le localStorage
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

//L'eplacement de l'HTMLL
let container = document.getElementById("container");

// Initialisation du prix total du panier à 0 
let prixPanier = 0;

//Récupération de l'ID PRODUIT
let addIdBasket = [];

//Fonctio calcul Prix Total du panier et envoie au localStorage
function priceTotalBasket(camera){
  prixPanier += camera.quantity * camera.price / 100;
  //afficher et envoyer 
  let prixTotal = document.getElementById('prixTotal').textContent = prixPanier + " € ";
  localStorage.setItem('prixTotal', JSON.stringify(prixTotal));
};

//Boucle sur le panier
cameras.forEach((camera, i) => {
  container.innerHTML += `
    <tr>
        <td class="srcimage"><img src=${camera.imageUrl} alt="" /></td>
        <td>${camera.name}</td>
        <td>${camera.price / 100} €</td>
        <td>${camera.quantity}</td>
        <td><a href="#" class="deleteCamera" data-id="${i}"> <i class="fas fa-trash-alt"></i></a></td>
        <td >${camera.quantity * camera.price / 100} €</td>
    </tr>
  `;
  //j'appel la fonction
  priceTotalBasket(camera)
 
 //Boucle qui incémente l'ID produit
  for (let i = 0; i < camera.quantity; i++) {
    addIdBasket .push(camera.id);
  }
});


function deleteCamera(id) {
    let camera = cameras[id];
    if (camera.quantity > 1) {
      camera.quantity--;
    } else {

      cameras.splice(id, 1);//La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.

    }
    localStorage.setItem('panier', JSON.stringify(cameras));
    window.location.reload();// recharge la ressource depuis l'URL actuelle
  }// renvoie un objet Location qui contient des informations à propos de l'emplacement courant du document

// Supprimer un produit du panier avec Delete
document.querySelectorAll(".deleteCamera").forEach(delBtn => {
  delBtn.addEventListener('click', () => deleteCamera(delBtn.dataset.id))
});

let viderPanier = document.getElementById('viderPanier')
viderPanier.addEventListener('click',  deleteBasket);

//Fonction pour supprimer tout le panier avec .remove.clear.reload.
function deleteBasket() {
  if (cameras == null) {
  } else {
    container.remove();
    localStorage.clear();
    window.location.reload();
  }
};

//// GESTION DU FORMULAIRE ////

function sendOrder() {// méthode reportValidity, renvoie true
  let form = document.getElementById("form");
  if (form.reportValidity() == true && addIdBasket.length>0) {
    let contact = {
      'firstName': document.getElementById("nom").value,
      'lastName': document.getElementById("prenom").value,
      'address': document.getElementById("adresse").value,
      'city': document.getElementById("ville").value,
      'email': document.getElementById("email").value
    };
 
    let products = addIdBasket;

    let formulaireClient = JSON.stringify({
      contact,
      products,
    });


    // Apel de l'API avec la propriété ORDER (définis l'ordre on dessine les éléments) // ENVOIE DES DONNEES AVEC POST 
    fetch('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      mode: "cors",
      body: formulaireClient
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (r) {
        localStorage.setItem("contact", JSON.stringify(r.contact));
        window.location.assign("confirmation.html?orderId=" + r.orderId);
      })
      //SI PROBLEME API
      .catch(function (err) {
        console.log("fetch Error");
      });
  }
  else{
    alert(" Une erreur est survenue votre panier il est  peux étre vide ou le formulaire n'a pas été correctement rempli!")
  };
}

let envoiFormulaire = document.getElementById("envoiFormulaire");

envoiFormulaire.addEventListener('click', function (event) {
  event.preventDefault();// si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée 
  sendOrder();
});