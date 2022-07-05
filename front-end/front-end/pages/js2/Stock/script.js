let temp;
const s=0;
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:8088/services/RS/stock';
afficher()

let localisation=document.getElementById("localisation");
let nom=document.getElementById("nom");

function afficher(){
  fetch(url) 
  .then(res => res.json())
  .then(data=>renderStocks(data))

  const renderStocks =(stocks)=>{
  let  html='';  
 
    stocks.forEach(stock=>{
     
  //h=admin.id;

  html+='<tr>';
  html+='<td>'+stock.id+'</td>';
  html+='<td>'+stock.nom+'</td>';
  html+='<td>'+stock.localisation+'</td>';
  html+='<td> <a  onclick="valueSender('+stock.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+stock.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
}

function valueSender(id)
{


  localStorage.setItem('myValue',id);
 // console.log(localStorage.getItem('myValue'));
  window.location.href="Updatestock.html";
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