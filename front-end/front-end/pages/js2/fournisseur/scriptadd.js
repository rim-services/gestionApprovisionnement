
let temp;
let s=0;
var id =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:2525/services/RS/fournisseur';

console.log(id);

const addfournisseurForm = document.querySelector(".forms-sample");


//afficher()

let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let email= document.getElementById("email");
let pass=document.getElementById("password");
console.log(nom);

function onFormSubmit() {

  addfournisseurForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',

      body: JSON.stringify({
        email: email.value,
        nom: nom.value,
        pass: pass.value,
        prenom: prenom.value
      }),

      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json; charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
    }
    })
    // Converting to JSON
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.error);
  // afficher()  ;
  },

);
      

}

