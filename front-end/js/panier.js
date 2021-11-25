

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
        
        let panier = JSON.parse(localStorage.getItem('panier'));
        panier.splice(index,1);
        localStorage.setItem('panier', JSON.stringify(panier));
        
        newElementPrice.remove();
        newElementOption.remove();
        newElementTeddy.remove();
        newElementButton.remove();

        totalPrice(panier);
    }

    button.addEventListener('click',deleteLigne);
}


        // Si le tableau copié du localStorage contient au moins un objet, on affiche le panier 
    if (localStorage.getItem("products")) {
         cartCard.style.display = "flex";
        cartCard.style.flexDirection = "column";
        cartCard.style.justifyContent = "space-around";
         emptyCart.style.display = "none";

    } else {
            //message d'erreur si soucis d'affichage
            console.log('Cette adresse ne correspond pas a la page demandée');
        
     console.log(products);
  

        console.log(cartCard);

        //création d'une boucle FOR pour copié chaque objet dans le localStorage


        function  validation(event) {
            event.preventDefault();
            let allValid = true;
            for (i=0; i < listeId.length; i++) {
            
                let verif = document.getElementById(listeId[i]);
                let missVerif = document.getElementById('miss' + capitalizeFirstLetter(listeId[i]));
                let nameValid = document.getElementById('name').value;
                let adressValid = document.getElementById('adress').value;
                let mailValid = document.getElementById('email').value;
                
                //si le champs est vide
        
                if(verif.validity.valueMissing){
                    event.preventDefault();
                    missVerif.textContent = 'Champ manquant';
                    missVerif.style.color = 'red';
                    allValid = false;
        
                // si le format de données n'est pas correct 
        
                } else if ((listeId[i] == 'nom' || listeId[i] == 'prenom' || listeId[i] == 'ville') && nameValid.test(verif.value) == false) {
                    event.preventDefault();
                    missVerif.textContent = 'Format incorrect';
                    missVerif.style.color = 'red';
                    allValid = false;
                } else if (listeId[i] == 'adresse' && adressValid.test(verif.value) == false) {
                    event.preventDefault();
                    missVerif.textContent = 'Format incorrect';
                    missVerif.style.color = 'red';
                    allValid = false;
                } else if (listeId[i] == 'email' && mailValid.test(verif.value) == false) {
                    event.preventDefault();
                    missVerif.textContent = 'Format incorrect';
                    missVerif.style.color = 'red';
                    allValid = false;
                };
            }
        
    if (allValid == true) {
            
        let contactForm = {
            lastName : document.getElementById(listeId[0]).value,
            firstName : document.getElementById(listeId[1]).value,
            email : document.getElementById(listeId[2]).value,
            address : document.getElementById(listeId[3]).value,
            city : document.getElementById(listeId[4]).value, 
        }

        let produitPost = [];
        for (let i=0;i<panier.length; i++) {
            produitPost.push(panier[i].id)
        }

        let objetPost = {
            contact : contactForm,
            products : produitPost
        }

        fetch('http://localhost:3000/api/teddies/order', {
           
            body: JSON.stringify(objetPost)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            localStorage.setItem('order', JSON.stringify(data));
            window.location.href = './confirmation.html';
        }).catch(err => {
            console.log('err', err);
            alert("Serveur non disponible");
        })
    }

    /*
        for (let produit in panier) {
           let productRow = document.createElement("div");
            cart.insertBefore(productRow, test);
            productRow.classList.add("text-center", "panier-produit");

            let productName = document.createElement("div");
            productRow.appendChild(productName);
            productName.classList.add("panier-title");
            productName.innerHTML = panier[produit].name;

          let productPrice = document.createElement("div");
          productRow.appendChild(productPrice);
          productPrice.classList.add(
                "panier-title",
                 "data-price",
                "price"
                
         );
         console.log(productPrice);
      */
        }
      

        
  
    }