let container = document.getElementById("container");//variable pr pointer un élément de la page html par son ID

// fonction anonyme pour Afficher l'html = propriété Element insérer le HTML dans le document
const display = camera => {
    container.innerHTML += 
    `
    <article id="cardsProduct" class="produit">
        <img src=${camera.imageUrl} alt="photos produits" />
        <div class="bloqueDescription">
            <h2> ${camera.name}</h2>
            <p>${camera.price / 100}€</p>
        </div>
        <p>${camera.description}</p>
        <a href="produit.html?id=${camera.id}"> En savoir plus</a>
    </article>`
    console.log(camera.price );
};


fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())  
    .then(function (listeProduct) {
        // boucle for prend chaque produits de la liste à chaque passage 
        for (let product of listeProduct) {
            let camera = new Camera(product)
            display(camera);
        }
    })
    
    //S'il y a un problème attappe e
    .catch(function (err) {
        console.log("fetch Error")
        alert("Merci de recharger la page, une erreur est survenue !")


    });



        
    