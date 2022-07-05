
let temp;
let s=0;
let mod='create';
var idEdit =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8088/services/RS/Produit_commander';
let url1='http://localhost:8088/services/RS/Produit';
let url2='http://localhost:8088/services/RS/commande';


let produit_id=document.getElementById("produit_id");
let sortie_id= document.getElementById("commande_id");
let quantite=document.getElementById("quantite");

//let id=document.getElementById("edit_id");
console.log(id);
//

const addProduit_commanderForm = document.querySelector(".forms-sample");
//const editAdminForm = document.querySelector(".add-admin-form");
//const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";

//afficher()

function afficherCommande(){
  fetch(url2)
      .then(res1 => res1.json())
      .then(data1=>renderComds(data1))

  const renderComds =(comds)=>{
      let  html1='';
      comds.forEach(cmd=>{
         
          html1+='<option>'+cmd.id+'</option>';

      })
      document.getElementById("commande_id").innerHTML=html;
  }
}


function afficherProduit(){
  fetch(url1) 
  .then(res2 => res2.json())
  .then(data2=>renderProduits(data2))

  const renderProduits =(produits)=>{
  let  html2='';  
 
  produits.forEach(produit=>{
     
  //h=admin.id;
  console.log(produit);
  
  html2+='<option>'+stock.id+'</option>';


})
   document.getElementById("produit_id").innerHTML=html2;
 }
}
updateData(idEdit)
function update(){
   
  addProduit_commanderForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${idEdit}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
      id_copmmande: id_copmmande.value,
      id_produit: id_produit.value,
      quantite: quantite.value
      
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
    id_copmmande.value=data.id_copmmande,
    id_produit.value=data.id_produit,
    quantite.value=data.quantite
  })

//update()
}
