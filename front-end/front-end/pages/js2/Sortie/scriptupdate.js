
let temp;
let s=0;
let mod='create';
var idEdit =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8088/services/RS/Sortie';


const addSortieForm = document.querySelector(".forms-sample");


let date=document.getElementById("date");
let description=document.getElementById("description");

updateData(idEdit)
function update(){
   
  addSortieForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  fetch(`${url}/${idEdit}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
  },
    body: JSON.stringify({
  
      date: date.value,
      description : description.value
      
    }),
  }) 
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(console.error);
 
})
//window.location.href="admin.html";
    }

function updateData(idEdit){
  fetch(`${url}/${idEdit}`,{
    method:'GEt',
  }) 
  .then(res => res.json())
  .then(data=>{
    date.value=data.date,
    description.value=data.description
  })

//update()
}
