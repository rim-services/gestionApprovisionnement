
let temp;
let s=0;
let mod='create';
var idEdit =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8080/gestionApprovisionnement_war/RS/Produitt';
let url1='http://localhost:8080/gestionApprovisionnement_war/RS/stock';

let code=document.getElementById("code");
let libelle=document.getElementById("libelle");
let prix= document.getElementById("prix");
let date_Expiration=document.getElementById("date_Expiration");
let  quantite=document.getElementById("quantite");
let id_stock=document.getElementById("id_stock");



const addProduitForm = document.querySelector(".forms-sample");

updateData(idEdit)
function update(){
   
  addAdminForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${idEdit}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      code: code.value,
      libelle: libelle.value,
      prix: prix.value,
      date_Expiration: date_Expirtion.value,
      quantite : quantite.value,
      "stock.id" : id_stock.value
      
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
    code.value=data.code,
    libelle.value=data.libelle,
    prix.value=data.prix,
    date_Expiration.value=data.date_Expiration,
    quantite.value=data.quantite,
    id_stock.value=data.stock.id
  })

//update()
}
