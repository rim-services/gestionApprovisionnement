let temp;
const s=0;
let url='http://localhost:8080/gestionApprovisionnement_war/RS/commande';
afficher()

const table = document.querySelector('.table');
let libelle=document.getElementById("Libelle");
let etat=document.getElementById("Etat");
let date= document.getElementById("Date");
let fournisseur=document.getElementById("Fournisseur");

function afficher(){
    fetch(url)
        .then(res => res.json())
        .then(data=>renderComds(data))

    const renderComds =(comds)=>{
        let  html='';

        comds.forEach(cmd=>{

            html+='<tr>';
            html+='<td>'+cmd.libelle+'</td>';
            html+='<td>'+cmd.etat+'</td>';
            html+='<td>'+cmd.date+'</td>';
            html+='<td>'+cmd.fournisseur.nom+'</td>';
            html+='<td> <a  onclick="valueSender('+cmd.id+')" ><i class="fas fa-edit" style="font-size:18px;color:rgb(90, 168, 245)"> </i></a>&emsp;<a   id="delete"  onclick="DeleteData('+cmd.id+')"> <i class="fa fa-trash" style="font-size:18px;color:red"></i></a></td>';
            html+='</tr>';

        })
        document.getElementById("table").innerHTML=html;
    }
}

function valueSender(id) {
    localStorage.setItem('myValue',id);
    window.location.href="Updatecommande.html";
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
