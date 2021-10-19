let params = (new URL(document.location)).searchParams;

let id = params.get('id'); 

fetch('http://localhost:3000/api/teddies/'+id, {

}).then(response => response.json()

    
).then(data =>{
 
  console.log(data);

  a la place du console.log je vais appeller le nournours 

}).catch(err => {
    console.log('err', err);
    alert('Serveur non disponible');
});


sessionStorage.setItem("test", "bonjour");
console.log(sessionStorage.getItem("test"));