
let temp;
let s=0;
var id =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8088/services/RS/Sortie_detail';
let url1 ='http://localhost:8088/services/RS/Sortie';
let url2 ='http://localhost:8088/services/RS/Produit';

//let id=document.getElementById("edit_id");
console.log(id);
//

const addSortie_detailForm = document.querySelector(".forms-sample");
//const editAdminForm = document.querySelector(".add-admin-form");
//const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";

//afficher()

let produit_id=document.getElementById("produit_id");
let sortie_id= document.getElementById("sortie_id");
let quantite=document.getElementById("quantite");
let pu=document.getElementById("pu");


const renderSorties =(Sorties)=>{
  let  html1='';  
 
  Sorties.forEach(Sortie=>{
  h1=Sortie.id;
  
  html1+='<option>'+Sortie.id+'</option>';

})
   document.getElementById("sortie_id").innerHTML=html1;
 }
 
    fetch(url1) 
      .then(res1 => res1.json())
      .then(data1=>renderSorties(data1))

//Produit GET ID
      
const renderProduits =(Produits)=>{
  let  html2='';  
 
  Produits.forEach(Produit=>{
  h2=Produit.id;
  
  html2+='<option>'+Produit.id+'</option>';

})
   document.getElementById("produit_id").innerHTML=html2;
 }
 
    fetch(url2) 
      .then(res2 => res2.json())
      .then(data2=>renderProduits(data2))



function onFormSubmit() {

  addSortie_detailForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
        produit:{
          id:produit_id.value
        },
        sortie:{
          id:sortie_id.value
        },
        quantite: quantite.value,
        pu: pu.value
      }),

      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json; charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
    }
    })
    // Converting to JSON
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.error);
  // afficher()  ;
  },

);
      

}





