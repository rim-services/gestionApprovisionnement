let temp;
const s=0;
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:8088/services/RS/Sortie_detail';
let url1 ='http://localhost:8088/services/RS/Sortie';
let url2 ='http://localhost:8088/services/RS/Produit';


afficher()
let produit_id=document.getElementById("produit_id");
let sortie_id= document.getElementById("sortie_id");
let quantite=document.getElementById("quantite");
let pu=document.getElementById("pu");

function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderSortiedetails(data))

  const renderSortiedetails =(sortiedetails)=>{
  let  html='';  
 
    sortiedetails.forEach(Sortie_detail=>{
     
  //h=admin.id;

  html+='<tr>';
  html+='<td>'+Sortie_detail.id+'</td>';
  html+='<td>'+Sortie_detail.produit.id+'</td>';
  html+='<td>'+Sortie_detail.sortie.id+'</td>';
  html+='<td>'+Sortie_detail.quantite+'</td>';
  html+='<td>'+Sortie_detail.pu+'</td>';
  html+='<td> <a  onclick="valueSender('+Sortie_detail.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+Sortie_detail.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="UpdateSortie_detail.html";
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