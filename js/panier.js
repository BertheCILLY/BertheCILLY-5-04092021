//------Affichage des produits du panier -----

// sélection de la classe où je vais injecter le code HTML 
//console.log(localStorage.getItem("products)"));

//fonction de création du contenu de la page

function createLignePanier(index) {
    
    let newElementTeddy = document.createElement('div');
    let elementTeddy = document.getElementById('panier-produit');

    newElementTeddy.classList.add('panier-detail');
    newElementTeddy.classList.add('text-center');
    elementTeddy.appendChild(newElementTeddy);

    //création du contenu du produit panier

    let teddyName = document.createElement('p');
    teddyName.innerText = index.name;
    newElementTeddy.appendChild(teddyName);

    let teddyImg = document.createElement('img');
    teddyImg.src = index.img;
    teddyImg.classList.add('teddy-img');
    newElementTeddy.appendChild(teddyImg);

    //Ajoute l'option de couleur choisie

    let newElementOption = document.createElement('div');
    let elementOption = document.getElementById('panier-option');
    elementOption.appendChild(newElementOption);

    newElementOption.classList.add('panier-color');

    let teddyColor = document.createElement('p');
    teddyColor.innerText = index.color ? index.color : 'Aucune option';
    
    newElementOption.appendChild(teddyColor);

    //Ajoute le prix

    let newElementPrice = document.createElement('div');
    let elementPrice = document.getElementById('panier-prix');
    elementPrice.appendChild(newElementPrice);

    newElementPrice.classList.add('panier-price');

    let price = document.createElement('p');
    price.innerText = index.price.toLocaleString('fr-FR') + ' €';
    newElementPrice.appendChild(price);

    //Ajoute le bouton supprimer

    let newElementButton = document.createElement('div');
    let elementButton = document.getElementById('panier-bouton');
    elementButton.appendChild(newElementButton);

    newElementButton.classList.add('panier-button');

    let button = document.createElement('input');
    button.id = 'bouton-supprimer';
    button.type = 'button';
    button.value = 'Supprimer'
    newElementButton.appendChild(button);

    function deleteLigne() {
        
        let panier = JSON.parse(localStorage.getItem('products'));
        panier.splice(index,1);
        localStorage.setItem('products', JSON.stringify(panier));
        
        newElementPrice.remove();
        newElementOption.remove();
        newElementTeddy.remove();
        newElementButton.remove();

        totalPrice(panier);
    }

    button.addEventListener('click',deleteLigne);

    createLignePanier(index);
    deleteLigne();
}

     const panier = () => {
            let positionElement = document.getElementById("contenu-panier");
            let nameStorage = localStorage.getItem('products');
  
         if (nameStorage == null){
                 positionElement.innerHTML = "votre panier est vide";
        } else {
             positionElement.innerHTML = 
                createLignePanier(index);
                deleteLigne();
        
         }
         panier();
        };

       /*  for (let i=0; i<panier.length; i++) {
                     createLignePanier(panier[i]); };*/

// fonction qui calcule le prix total et l'insère dans la page

function totalPrice(panier) {
    
    let totalPrice = 0;
    for (let i=0; i<panier.length; i++) {
        totalPrice = totalPrice + panier[i].price;
    }

    let elementTotalPrice = document.getElementById('contenu-total-price');

    elementTotalPrice.innerText = 'Le montant total de la commande est : ' + totalPrice.toLocaleString('fr-FR') + '€.';

    localStorage.setItem("totalPriceConfirmation", totalPrice);

    totalPrice(panier); 
}
