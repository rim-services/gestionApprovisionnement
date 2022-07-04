
let temp;
const s=0;
let h;
let mod='create';
const addSortie_detailForm = document.querySelector(".add-Sortie_detail-form");
//const editSortie_detailForm = document.querySelector(".add-Sortie_detail-form");
const table = document.querySelector('.table');
let h1;
let h2;
// let url="http://localhost:8088/services/RS/Sortie_detail";
let url='http://localhost:2525/services/RS/Sortie_detail';
let url1 ='http://localhost:2525/services/RS/Sortie';
let url2 ='http://localhost:2525/services/RS/Produit';

let produit_id=document.getElementById("produit_id");
let sortie_id= document.getElementById("sortie_id");
let quantite=document.getElementById("quantite");
let pu=document.getElementById("pu");


var span = document.getElementsByClassName('close')[0];
span.onclick = function (){
  modal.style.display='none';
}


const renderSortie_details=(Sortie_details)=>{
  let  html='';  
 
  Sortie_details.forEach(Sortie_detail=>{
  h=Sortie_detail.id;
  html+='<tr>';
  html+='<td>'+Sortie_detail.id+'</td>';
  html+='<td>'+Sortie_detail.produit.id+'</td>';
  html+='<td>'+Sortie_detail.sortie.id+'</td>';
  html+='<td>'+Sortie_detail.quantite+'</td>';
  html+='<td>'+Sortie_detail.pu+'</td>';
  html+='<td> <a  href="#modal"  onclick="updateData('+Sortie_detail.id+')"><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"></i></a>&emsp;<a   id="delete"  onclick="DeleteData('+Sortie_detail.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
 
    fetch(url) 
      .then(res => res.json())
      .then(data=>renderSortie_details(data))


//SORTIE GET ID
      
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
             
// table.addEventListener('click',(e)=>{
//   e.preventDefault();
//   let deletebutton=e.target.id=='delete';
//   let editbutton=e.target.id=='edit';

// })
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
  addSortie_detailForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
        
        produit_id:produit_id.value,
        sortie_id:sortie_id.value,
        quantite:quantite.value,
        pu:pu.value
        
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
  addSortie_detailForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${id}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      produit_id:produit_id.value,
      sortie_id:sortie_id.value,
      quantite:quantite.value,
      pu:pu.value
     
      
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
    produit_id.value=data.produit_id,
    sortie_id.value=data.sortie_id,
    quantite.value=data.quantite,
    pu.value=data.pu
   
    
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