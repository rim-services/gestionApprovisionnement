let temp;
const s=0;
let h;
let mod='create';
const addSortieForm = document.querySelector(".add-Sortie-form");
//const editSortieForm = document.querySelector(".add-Sortie-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/Sortie";
let url='http://localhost:2525/services/RS/Sortie';

let date=document.getElementById("date");
let description=document.getElementById("description");




var span = document.getElementsByClassName('close')[0];
span.onclick = function (){
  modal.style.display='none';
}


const renderSorties =(Sorties)=>{
  let  html='';  
 
    Sorties.forEach(Sortie=>{
  h=Sortie.id;
  html+='<tr>';
  html+='<td>'+Sortie.id+'</td>';
  html+='<td>'+Sortie.date+'</td>';
  html+='<td>'+Sortie.description+'</td>';
  html+='<td> <a  href="#modal"  onclick="updateData('+Sortie.id+')"><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"></i></a>&emsp;<a   id="delete"  onclick="DeleteData('+Sortie.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
 
    fetch(url) 
      .then(res => res.json())
      .then(data=>renderSorties(data))
 

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
  addSortieForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
        date: date.value,
        description: description.value
        
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
  addSortieForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${id}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      date: date.value,
      description: description.value
      
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
    date.value=data.date,
    description.value=data.description
    
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