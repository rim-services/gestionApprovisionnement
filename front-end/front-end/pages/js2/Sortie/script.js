let temp;
const s=0;
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:8088/services/RS/Sortie';
afficher()
let date=document.getElementById("date");
let description=document.getElementById("description");

function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderSorties(data))

  const renderSorties =(sorties)=>{
  let  html='';  
 
    sorties.forEach(sortie=>{
     
  //h=admin.id;

  html+='<tr>';
  html+='<td>'+sortie.id+'</td>';
  html+='<td>'+sortie.date+'</td>';
  html+='<td>'+sortie.description+'</td>';
  html+='<td> <a  onclick="valueSender('+sortie.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+sortie.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="Updatesortie.html";
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