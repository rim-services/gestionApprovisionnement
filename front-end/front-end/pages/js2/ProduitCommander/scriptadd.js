
let temp;
let s=0;
var id =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8088/services/RS/admin';

//let id=document.getElementById("edit_id");
console.log(id);
//

const addAdminForm = document.querySelector(".forms-sample");
//const editAdminForm = document.querySelector(".add-admin-form");
//const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";

//afficher()

let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let email= document.getElementById("email");
let pass=document.getElementById("password");
console.log(nom);

function onFormSubmit() {

  addAdminForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
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

