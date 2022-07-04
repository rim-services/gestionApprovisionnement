let temp;
const s=0;
let h;
let h1;
let mod='create';
const addProduitForm = document.querySelector(".add-produit-form");
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:2525/services/RS/Produit';
let url1='http://localhost:2525/services/RS/stock';

let code=document.getElementById("code");
let libelle=document.getElementById("libelle");
let prix= document.getElementById("prix");
let date_Expiration=document.getElementById("date_Expiration");
let  quantite=document.getElementById("quantite");
let id_stock=document.getElementById("id_stock");


var span = document.getElementsByClassName('close')[0];
span.onclick = function (){
  modal.style.display='none';
}


const renderProduits =(produits)=>{
  let  html='';  
 
  produits.forEach(produit=>{
  h=produit.id;
  html+='<tr>';
  html+='<td>'+produit.id+'</td>';
  html+='<td>'+produit.code+'</td>';
  html+='<td>'+Produit.libelle+'</td>';
  html+='<td>'+Produit.prix+'</td>';
  html+='<td>'+Produit.date_Expiration+'</td>';
  html+='<td>'+Produit.quantite+'</td>';
  html+='<td>'+Produit.id_stock+'</td>';
  html+='<td> <a  href="#modal"  onclick="updateData('+produit.id+')"><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"></i></a>&emsp;<a   id="delete"  onclick="DeleteData('+produit.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
 
    fetch(url) 
      .then(res => res.json())
      .then(data=>renderProduits(data))
 

// table.addEventListener('click',(e)=>{
//   e.preventDefault();
//   let deletebutton=e.target.id=='delete';
//   let editbutton=e.target.id=='edit';

// })


//get id stock
const renderStocks =(stocks)=>{
  let  html1='';  
 
stocks.forEach(stock=>{
  h1=stock.id;
  html1+='<option>'+stock.id+'</option>';

})
   document.getElementById("id_stock").innerHTML=html1;
 }
 
    fetch(url1) 
      .then(res1 => res1.json())
      .then(data1=>renderStocks(data1))
 



function onFormSubmit() {

      let formData = readFormData();
      if (mod === 'create'){
   s=0;
      }
      else{
        s=1;
      }
      

}
if(s==0){
  addProduitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
      code : code.value,
      libelle  : libelle.value,
       prix : prix.value,
      date_Expiration  : date_Expirtion.value,
      quantite : quantite.value,
      id_stock: id_stock.value,
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
else{
  addProduitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${id}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      code:code.value,
      libelle:libelle.value,
     // pass: pass.value,
     prix: prix.value,
     date_Expiration: date_Expiration.value,
     quantite: quantite.value,
     id_stock: id_stock.value
      
    }),
  }) 
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(console.error);
           mod='create';
         document.getElementById("submit").value ='Create';
})
}
function updateData(id){
  fetch(`${url}/${id}`,{
    method:'GEt',
  }) 
  .then(res => res.json())
  .then(data=>{
    code.value=data.code,
    libelle.value=data.libelle,
    prix.value=data.prix,
    date_Expiration.value=data.date_Expiration,
    quantite.value=data.quantite,
    id_stock.value=data.id_stock
  })
  document.getElementById("submit").value ='Update';
  mod='update';

}
function DeleteData(id) {
  if (confirm('Vous voullez vraiment supprimer se pernonne?')) {
    fetch(`${url}/${id}`,{
      method:'DELete',

    }) 
    .then(response => response.json())
    .then(json => console.log(json))
  }
}