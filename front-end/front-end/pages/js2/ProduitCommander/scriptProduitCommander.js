let temp;
const s=0;
let h;
let mod='create';
const addAdminForm = document.querySelector(".add-admin-form");
//const editAdminForm = document.querySelector(".add-admin-form");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:2525/services/RS/admin';

let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let email= document.getElementById("email");
let pass=document.getElementById("password");



var span = document.getElementsByClassName('close')[0];
span.onclick = function (){
  modal.style.display='none';
}


const renderAdmins =(admins)=>{
  let  html='';  
 
    admins.forEach(admin=>{
  h=admin.id;
  html+='<tr>';
  html+='<td>'+admin.id+'</td>';
  html+='<td>'+admin.nom+'</td>';
  html+='<td>'+admin.prenom+'</td>';
  html+='<td>'+admin.email+'</td>';
  html+='<td> <a  href="#modal"  onclick="updateData('+admin.id+')"><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"></i></a>&emsp;<a   id="delete"  onclick="DeleteData('+admin.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
  html+='</tr>';

})
   document.getElementById("table").innerHTML=html;
 }
 
    fetch(url) 
      .then(res => res.json())
      .then(data=>renderAdmins(data))
 

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
  addAdminForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
      method:'POST',
      
      // mode: 'cors',  
      body: JSON.stringify({
        email: email.value,
        nom: nom.value,
        pass: pass.value,
        prenom: prenom.value
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
  addAdminForm.addEventListener('submit',(e)=>{
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
      prenom: prenom.value,
     // pass: pass.value,
      email: email.value
      
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
    prenom.value=data.prenom,
    email.value=data.email
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