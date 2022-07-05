let temp;
const s=0;
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:2525/services/RS/Produit';
afficher()
let code=document.getElementById("code");
let libelle=document.getElementById("libelle");
let prix= document.getElementById("prix");
let date_Expiration=document.getElementById("date_Expiration");
let  quantite=document.getElementById("quantite");
let id_stock=document.getElementById("id_stock");



function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderProduits(data))

  const renderProduits =(produits)=>{
  let  html='';  
 
  produits.forEach(produit=>{
     
  //h=admin.id;
  console.log(produit);
  html+='<tr>';
  html+='<td>'+produit.id+'</td>';
  html+='<td>'+produit.code+'</td>';
  html+='<td>'+produit.libelle+'</td>';
  html+='<td>'+produit.prix+'</td>';
  html+='<td>'+produit.date_Expiration+'</td>';
  html+='<td>'+produit.quantite+'</td>';
  html+='<td>'+produit.stock.id+'</td>';
  html+='<td> <a  onclick="valueSender('+produit.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+produit.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="Updateproduit.html";
} 


function DeleteData(id) {
  if (confirm('Vous voullez vraiment supprimer se produit?')) {
    fetch(`${url}/${id}`,{
      method:'DELete',

    }) 
    .then(response => response.json())
    .then(json => console.log(json))
    afficher();
  }
  
}