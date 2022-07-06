
let temp;
let s=0;
let mod='create';
var idEdit =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8080/gestionApprovisionnement_war/RS//stock';



let localisation=document.getElementById("localisation");
let nom=document.getElementById("nom");

const addStockForm = document.querySelector(".forms-sample");

updateData(idEdit)
function update(){
   
  addStockForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${idEdit}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      nom:nom.value,
      localisation:localisation.value
      
    }),
  }) 
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(console.error);
 
})
//window.location.href="admin.html";
    }

function updateData(idEdit){
  fetch(`${url}/${idEdit}`,{
    method:'GEt',
  }) 
  .then(res => res.json())
  .then(data=>{
    nom.value=data.nom,
    localisation.value=data.localisation
  })

//update()
}
