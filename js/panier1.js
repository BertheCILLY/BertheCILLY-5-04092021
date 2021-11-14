import {
    checkIfCartEmpty,
    userInputVerification,
    
} from './function.js';//Modules ES6 pour fragmenter mon code

let panier = JSON.parse(localStorage.getItem('products'));
const idSectionContainercartHtml = document.querySelector('#cart-card');
const userFormSubmit = document.getElementById('order');
let totalPriceDisplay = document.getElementById('totalPrice');
consol.log(totalPriceDisplay);

 
/*La fonction suivante parcourt chaque clé présente dans le localStorage et affiche les valeurs correspondantes.
for (var i = 0; i < localStorage.length; i++) {
   console.log(localStorage.getItem(localStorage.key(i)));
}*/
(async () => {
    //return all commande on panier.html
    for (let key = 0; key < products.length; key++) {
        //awwait response key
        //productList = key 
        let productAdded = await recupInfoIdProduct(key);
        console.log(productAdded);
        //display and
        idSectionContainercartHtml.innerHTML += `
		<article class="cart__item" data-id="${productAdded._id}" data-color="${productAdded.data.colors[i] }" data-price="${productList.price}">
			<div class="cart__item__img">
				<img src="${productAdded.imageUrl}" alt="${productAdded.altTxt}">
			</div>
			<div class="cart__item__content">
				<div class="cart__item__content__titlePrice">
					<h2>${productAdded.name}</h2>
					<p>${productAdded.price} €</p>
					<p>Coloris : ${productAdded.teddyColor}</p>
				</div>
				<div class="cart__item__content__settings">
				
					<div class="cart__item__content__settings__delete">
						<p class="deleteItem">Supprimer</p>
					</div>
				</div>
			</div>
		</article>
		`;
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


  //effacer les  articles dans le panier class="deleteItem" 
 
 const deleteArticleNbr =()=> {
    let deleteProducListBtn = document.querySelectorAll('.deleteItem');
    for (let i = 0; i < deleteProducListBtn.length; i++) {
        deleteProducListBtn[i].addEventListener('click', (e) => {
            e.preventDefault();
            //select parent for close
            let articleDOM = deleteProducListBtn[i].closest('article');
                                                                        console.log(articleDOM);
            let itemId = articleDOM.dataset.id;
                                                                         console.log(itemId);
                                                                         //recup données
            let itemColor = articleDOM.dataset.color;
           
            let localStorageKey = [itemId, itemColor];
            //delete localstorage itemId , itemColor,itemQuantity
            localStorage.removeItem(localStorageKey, itemQuantity);
            articleDOM.remove();

            //display html (class ="itemQuantity" )
            displayNumberTotalPanier();
        });
    }
}

/*
  Bouton Commande
 * userFormSubmit = class="order"
 */
 userFormSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    //si input form est true envoyer POST id localstorage
    if (userInputVerification()) {
        const product = idSendConfirm();
    
        const toSend = {
            contact: {
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: email.value,
            },
            product,
        };
        console.log(toSend);
        fetch('http://localhost:3000/api/teddies', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSend),
        })
            .then((response) => response.json())
            .then((value) => {
                //effacer le localStarage aprés la commande
                localStorage.clear();
                //redirection vers confirm.html
                document.location.href = `./confirmation.html?id=${value.orderId}`;
                console.log(document.location.href);
                console.log(value.orderId);
            })
            .catch((error) => {
                console.log('Error: ' + error);
            });
    }
});