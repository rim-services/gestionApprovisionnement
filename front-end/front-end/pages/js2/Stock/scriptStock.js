let temp;
const s=0;
let h;
let mod='create';
const addStockForm = document.querySelector(".add-Stock-form");
//const editStockForm = document.querySelector(".add-Stock-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/Stock";
let url='http://localhost:2525/services/RS/stock';

let localisation=document.getElementById("localisation");
let nom=document.getElementById("nom");




var span = document.getElementsByClassName('close')[0];
span.onclick = function (){
  modal.style.display='none';
}


const renderStocks =(stocks)=>{
  let  html='';  
 
    stocks.forEach(stock=>{
  h=stock.id;
  html+='<tr>';
  html+='<td>'+stock.id+'</td>';
  html+='<td>'+stock.nom+'</td>';
  html+='<td>'+stock.localisation+'</td>';
  html+='<td> <a  href="#modal"  onclick="updateData('+stock.id+')"><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"></i></a>&emsp;<a   id="delete"  onclick="DeleteData('+stock.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
 
    fetch(url) 
      .then(res => res.json())
      .then(data=>renderStocks(data))
 

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
  addStockForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
        nom:nom.value,
        localisation:localisation.value
        // pass: pass.value,
       
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
  addStockForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${id}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      nom: nom.value,
      localisation: localisation.value
     // pass: pass.value,
     
      
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
    nom.value=data.nom,
    localisation.value=data.localisation
    
  })
  document.getElementById("submit").value ='Update';
  mod='update';

}
function DeleteData(id) {
  if (confirm('Vous voullez vraiment supprimer!')) {
    fetch(`${url}/${id}`,{
      method:'DELete',

    }) 
    .then(response => response.json())
    .then(json => console.log(json))
  }
}