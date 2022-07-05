let temp;
const s=0;
const table = document.querySelector('.table');
let url='http://localhost:2525/services/RS/fournisseur';
afficher()
let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let email= document.getElementById("email");
let pass=document.getElementById("password");



function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderfournisseurs(data))

  const renderfournisseurs =(fournisseur)=>{
  let  html='';  
 
  fournisseur.forEach(fournisseur=>{
     

  html+='<tr>';
  html+='<td>'+fournisseur.id+'</td>';
  html+='<td>'+fournisseur.nom+'</td>';
  html+='<td>'+fournisseur.prenom+'</td>';
  html+='<td>'+fournisseur.email+'</td>';
  html+='<td> <a  onclick="valueSender('+fournisseur.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+fournisseur.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="Updatefournisseur.html";
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