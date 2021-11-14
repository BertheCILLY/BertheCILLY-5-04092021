
//Identification de l'id de l'article et récupération de l'id de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

// récupération des données et affichage

fetch('http://localhost:3000/api/teddies/'+id)

        .then(function(response) {
             return response.json();
  
    }).then(function(data)
    
 {

   
  //Création de la carte avec l'image , le titre la description et le prix en euro
    document.getElementById("image").src = data.imageUrl;
    document.getElementById("titre").textContent= data.name;
    document.getElementById("description").textContent= data.description;
    document.getElementById("prix").textContent= data.price + ' €';
   

        //  Création des choix de couleur à chaque passage sur la boucle

        let option = document.createElement('option');
        for (let i=0; i < data.colors.length; i++) {
       
        option = document.createElement('option');
        option.setAttribute('value', data.colors[i]);
        option.textContent = data.colors[i];
        document.getElementById("color-select").appendChild(option);

     
        }

       
      

           // function addToCart() {
            const addToCartBtn = document.querySelector(".add-to-cart");
            const confirmation = document.querySelector(".added-to-cart-confirmation");
             const textConfirmation = document.querySelector(".confirmation-text");
    

            
            addToCartBtn.addEventListener("click", () => {


                   // ------ Création du produit qui sera ajouté au panier
                let productAdded = {
                  name: data.name,
                  price: data.price,
                   _id: id,
                  color:document.getElementById("color-select").value,

                 
                }; 
        
              
                      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
                let arrayProductInCart ;
                arrayProductsInCart = localStorage.getItem("products");
                          //On regarde si on a une variable "products"dans notre storage
                  if (arrayProductsInCart === null ){

                  arrayProductsInCart = [] ; //si le panier est null tu me crée un tableau vide
                  }
                      else{

                          //Sinon dans "arrayProducts" on reprend ce qui exist et on fait un JsonParse pour recuperer notre tableau de produit
                      arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
                              
                  }

                         /*
                       // Fenêtre pop Pup
                       const popPupConfirmation = () => {

                            if (window.confim (`${data.name} option: ${color-select} à bien ètè ajouté au panier, consultez le panier OK ou revenir à l'accueil ANNULER`)){
                              window.location.href = "panier.html";
                            }else{
                              window.location.href = "index.html";
                            }
                            }
                            
                                */
                  
                     arrayProductsInCart.push(productAdded);
                    localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
                    //On ajoute notre produit a notre tableau et qu'on remet notre tableau en storage (uniquement en format "sting")
            
         
           
            
          
            })

    }); 
  



