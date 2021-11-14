/**
 * Si le localStorage est vide ,retourne à  l'accueil
 */
 const idSectionContainercartHtml = document.querySelector('#cart-card');
 let panier = JSON.parse(localStorage.getItem('products'));
 
 consol.log(idSectionContainercartHtml);
 function checkIfCartEmpty() {
     if (localStorage.length == 0) {
         idSectionContainercartHtml.innerHTML =
             "<p >Il n'y a pas encore de peluche ici, visitez <a href='./index.html' style=' color:white; font-weight:700'>notre séléction </a>.</p>";
     }
     console.log(idSectionContainercartHtml);

 }
 const userFormSubmit = document.getElementById('order');
let totalPriceDisplay = document.getElementById('totalPrice');
/*La fonction suivante parcourt chaque clé présente dans le localStorage et affiche les valeurs correspondantes.
for (var i = 0; i < localStorage.length; i++) {
   console.log(localStorage.getItem(localStorage.key(i)));
}*/
(async () => {
    //return all commande on panier.html
    for (let key = 0; key < products.length; key++) {
        //awwait response key
        //productList = key 
        let productList = await recupInfoIdProduct(key);
        console.log(productList);
        //display and
        idSectionContainercartHtml.innerHTML += `
		<article class="cart__item" data-id="${productList._id}" data-color="${ productAdded.data.colors[i] }" data-price="${productList.price}">
			<div class="cart__item__img">
				<img src="${productList.imageUrl}" alt="${productList.altTxt}">
			</div>
			<div class="cart__item__content">
				<div class="cart__item__content__titlePrice">
					<h2>${productList.name}</h2>
					<p>${productList.price} €</p>
					<p>Coloris : ${ teddyColor}</p>
				</div>
				<div class="cart__item__content__settings">
					<div class="cart__item__content__settings__quantity">
						<p>Qté : </p>
						<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${localStorage.getItem(
                            localStorage.key(key)
                        )}">
					</div>
					<div class="cart__item__content__settings__delete">
						<p class="deleteItem">Supprimer</p>
					</div>
				</div>
			</div>
		</article>
		`;
        console.log(recupInfoIdProduct);

    }
    //Delect product panier
    deleteArticleNbr();
    //input number Quantity possibility addition and send in localStorage
    refreshAndSendTheNumber();
    //display html (class ="itemQuantity" )
    displayNumberTotalPanier();
    //Display Total addition price panier(id='totalPrice) when we add several sofas
    displayTotalPrice();
})();
 //class pour la validation du formulaire
class Form {
    constructor() {   //méthode qui s'execute quand on utilise la méthode new
        this.firstName = document.getElementById('firstName').value;
        this.lastName = document.getElementById('lastName').value;
        this.adress = document.getElementById('address').value;
        this.city = document.getElementById('city').value;
        this.email = document.getElementById('email').value;
    }//pour assigner tout ça j'utilise this, pour l'objet utiliser 
}

function userInputVerification() {
    const userForm = new Form();
    //verification du  nom
    function firstNameValid() {
        const userFirstName = userForm.firstName;
        const firstNameError = document.getElementById('firstNameError');
        if (
            /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(userFirstName)
        ) {
            firstNameError.innerText = '';
            return true;
        } else {
            firstNameError.innerText =
                'Votre prénom ne peut contenir que des lettres, de 3 à 20 caractères.';
        }
    }
     //verification du Prénom
    function lastNameValid() {
        const userLastName = userForm.lastName;
        const lastNameError = document.getElementById('lastNameError');
        if (/^[A-Za-z]{2,20}$/.test(userLastName)) {
            lastNameError.innerText = '';
            return true;
        } else {
            lastNameError.innerText =
                'Votre nom ne peut contenir que des lettres, de 2 à 20 caractères.';
        }
    }
    //verification de l'adresse
    function adressValid() {
        const userAdress = userForm.adress;
        const addressError = document.getElementById('addressError');
        if (/[^§]{5,50}$/.test(userAdress)) {
            addressError.innerText = '';
            return true;
        } else {
            addressError.innerText = "L'adresse semble incorrect.";
        }
    }
    //verification de la ville
    function cityValid() {
        const userCity = userForm.city;
        const cityError = document.getElementById('cityError');
        if (/^(.){4,128}$/.test(userCity)) {
            cityError.innerText = '';
            return true;
        } else {
            cityError.innerText =
                'La ville ne peut contenir que des lettres, de 2 à 20 caractères.';
        }
    }
    //verification de l'émail
    function emailValid() {
        const userEmail = userForm.email;
        const emailError = document.getElementById('emailError');
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)) {
            emailError.innerText = '';
            return true;
        } else {
            emailError.innerText =
                'Il faut renseigner une adresse email valide.';
        }
    }
    // si tout est ok , sinon données invalide
    if (
        firstNameValid() &&
        lastNameValid() &&
        adressValid() &&
        cityValid() &&
        emailValid()
    ) {
        return true;
    } else {
        console.log('Unvalid form input.');
    }
}
 
