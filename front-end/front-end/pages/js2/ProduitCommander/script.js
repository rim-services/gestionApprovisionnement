let temp;
const s=0;
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:8088/services/RS/admin';
afficher()
let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let email= document.getElementById("email");
let pass=document.getElementById("password");

function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderAdmins(data))

  const renderAdmins =(admins)=>{
  let  html='';  
 
    admins.forEach(admin=>{
     
  //h=admin.id;

  html+='<tr>';
  html+='<td>'+admin.id+'</td>';
  html+='<td>'+admin.nom+'</td>';
  html+='<td>'+admin.prenom+'</td>';
  html+='<td>'+admin.email+'</td>';
  html+='<td> <a  onclick="valueSender('+admin.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+admin.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="Updateadmin.html";
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