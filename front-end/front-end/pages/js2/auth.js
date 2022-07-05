let temp;
const s=0;
const LoginForm = document.querySelector(".box");
const table = document.querySelector('.table');
// let url="http://localhost:8088/services/RS/admin";
let url='http://localhost:8088/services/RS/admin/login';

function auth(){
  
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    console.log(email)
  fetch(`${url}/${email}/${pass}`)
  .then(res => res.json())
  .then(data=> {

 
        if(data==true){
          console.log(data)
         // afficher()
            window.location.href="index.html";
        }
        else{
          console.log(data)
            window.location.href="login.html";
        }})
  //h=admin.id;


 //  document.getElementById("table").innerHTML=html;
 
}