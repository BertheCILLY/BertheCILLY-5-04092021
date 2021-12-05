//je récupère les données de l'URL
let paramsUrl = new URL(window.location).searchParams;//retourne un objet permettant d'accéder aux arguments décodés de la requête GET contenu dans l'URL.


let orderId = paramsUrl.get("orderId");

//je récupère les données du contact
let contact = JSON.parse(localStorage.getItem("contact"));

//je récupère le total

let prixTotal = JSON.parse(localStorage.getItem("prixTotal"));


// J'affiche la page HTML
function display (){
    confirmation.innerHTML += `
        <p>
        Merci ${contact.firstName } ${contact.lastName}  pour votre commande
        </p>
        <hr>
        <p>Nous avons bien reçu votre commande N° ${orderId} </br>
       
        </p>
        Un email vous sera envoyer à l'adresse : </br> ${contact.email} a l'envoi de votre commande  
    `
   
};



display();