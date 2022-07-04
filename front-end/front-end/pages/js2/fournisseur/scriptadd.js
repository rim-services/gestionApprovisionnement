let h1;
let temp;
let s=0;
//var id =parseInt(localStorage.getItem('myValue'));
let url2='http://localhost:8088/services/RS/Produit';
let url1='http://localhost:8088/services/RS/stock';
//let id=document.getElementById("edit_id");

//

const addProduitForm = document.querySelector(".forms-sample");
//const editAdminForm = document.querySelector(".add-admin-form");
//const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";

//afficher()

let code=document.getElementById("code");
let libelle=document.getElementById("libelle");
let prix= document.getElementById("prix");
let date_Expiration=document.getElementById("date_Expiration");
let  quantite=document.getElementById("quantite");
let id_stock=document.getElementById("id_stock");



function afficherStock(){
  fetch(url1) 
  .then(res1 => res1.json())
  .then(data1=>renderStocks(data1))


  const renderStocks =(stocks)=>{
    let  html1='';  
 
  stocks.forEach(stock=>{
  
    html1+='<option>'+stock.id+'</option>';
  })
     document.getElementById("id_stock").innerHTML=html1;
   }
}



function onFormSubmit() {
  console.log(code.value);
  console.log(libelle.value);
  console.log(prix.value);
  console.log(date_Expiration.value);
  console.log(quantite.value);
  console.log(id_stock.value);
  addProduitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url2,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
    
      code: code.value,
      date_Expiration:"2022-06-21T22:00:00Z[UTC]",
      libelle: libelle.value,
      prix: prix.value,
      quantite:  quantite.value,
      stock : {
        localisation:"capital-boutique 123",
        nom:"Magasin 1"
        } 
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
  },

);
      

}

afficherStock();





 
   

