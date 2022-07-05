let temp;
const s=0;
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:8088/services/RS/Produit_commander';
let url1='http://localhost:8088/services/RS/Produit';
let url2='http://localhost:8088/services/RS/commande';
afficher()

let produit_id=document.getElementById("produit_id");
let sortie_id= document.getElementById("commande_id");
let quantite=document.getElementById("quantite");

function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderProduitCommanders(data))

  const renderProduitCommanders =(ProduitCommanders)=>{
  let  html='';  
 
  ProduitCommanders.forEach(ProduitCommander=>{
     
  //h=admin.id;

  html+='<tr>';
  html+='<td>'+ProduitCommander.id+'</td>';
  html+='<td>'+ProduitCommander.id_produit+'</td>';
  html+='<td>'+ProduitCommander.id_commande+'</td>';
  html+='<td>'+ProduitCommander.quantite+'</td>';
  html+='<td> <a  onclick="valueSender('+ProduitCommander.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+ProduitCommander.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="UpdateProduitcommander.html";
} 


function DeleteData(id) {
  if (confirm('Vous voullez vraiment supprimer se pernonne?')) {
    fetch(`${url}/${id}`,{
      method:'DELete',

    }) 
    .then(response => response.json())
    .then(json => console.log(json))
    afficher();
  }
  
}