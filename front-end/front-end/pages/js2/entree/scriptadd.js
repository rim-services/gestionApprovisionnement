let temp;
let s=0;
var id =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:2525/services/RS/entree';

//let id=document.getElementById("edit_id");
console.log(id);
//

const addEntreeForm = document.querySelector(".forms-sample");
//const editentreeForm = document.querySelector(".add-entree-form");
//const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/entree";

//afficher()

let date=document.getElementById("date");
let description=document.getElementById("description");
console.log(description);

function onFormSubmit() {

  addentreeForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',

      body: JSON.stringify({
        date: date.value,
        description: description.value,
       
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

