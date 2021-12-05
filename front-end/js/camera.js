class Camera {//constructor est une méthode qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class.
    constructor({// class pour fabriquer l'objet dans lequel ira les valuent du formulaire 
        name,
        imageUrl,
        price,
        _id,
        description,
        lenses,
        quantity
    }) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = _id;
        this.description = description;
        this.lenses = lenses;
        this.quantity = parseInt(quantity, 10); // transforme chaine de caractère en nombre
    }

    selectLens(lens){
        this.selectedLens = lens;
    }

};