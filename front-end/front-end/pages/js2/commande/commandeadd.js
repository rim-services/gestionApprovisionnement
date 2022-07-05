
let temp;
let s=0;
var id =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:2525/services/RS/commande';
let urlf = 'http://localhost:2525/services/RS/fournisseur';
let urlp = 'http://localhost:2525/services/RS/Produit';


const addCommandeForm = document.querySelector(".forms-sample");

let libelle=document.getElementById("libelle");
let libellep=document.getElementById("libellep");
let etat=document.getElementById("etat");
let date1= new Date();
date1=date1.toISOString()

let fournisseur=document.getElementById("Fournisseur");

var c=0;
var cc=1;
let produits=[];
let produit=[];






function onFormSubmit() {
    addCommandeForm.addEventListener('submit',(e)=>{
            e.preventDefault();
        // console.log(libelle.value);
        // console.log(etat.value);
        console.log(libellep.value);
        // console.log(date1);

        // getProduits();
        console.log(produits);
            fetch(url,{
                method:'POST',
                body: JSON.stringify({
                    date: date1,
                    etat: etat.value,
                    fournisseur: {
                            email: "frn@gmail.com",
                            nom: "fornisseurTest",
                            pass: "1234",
                            prenom: "frnprenom"
                    },
                    libelle: libelle.value
                }),


                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
                    // "Access-Control-Allow-Origin": "*",
                }
            })

                .then(response => console.log(response))
                .catch(console.error);
            // afficher()  ;
        console.log("good");
        },

    );


}


function  add_more_field(){

    html='<div  class="row1">\
    <div class="card-header"><h6>Produit '+cc+' <br></h6></div>\
        <div class="form-group row">\
        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Libelle</label>\
        <div class="col-sm-9">\
        <input type="text" class="form-control" id="libellep" name="'+c+'" placeholder="libelle"/>\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Prix unitaire</label>\
        <div class="col-sm-9">\
            <input type="number" class="form-control" id="prix" name="'+(c+1)+'" placeholder="prix"/>\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Quantite</label>\
        <div class="col-sm-9">\
            <input type="number" class="form-control" id="quantite" name="'+(c+2)+'" placeholder="quantite"/>\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Date expiration</label>\
        <div class="col-sm-9">\
            <input type="date" class="form-control" id="date" name="'+(c+3)+'" placeholder="Date"/>\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Stock</label>\
        <div class="col-sm-9">\
            <select class="form-control" id="stock" name="'+(c+4)+'" ><option> select </option></select>\
        </div>\
    </div>\
</div>'
    var form=document.getElementById('commande_form')
    form.innerHTML+=html;

    c=c+5;
    cc++;
}

function getProduits(){
    let inputs=[];
    var myP = document.getElementsByClassName("row1");

    for (var i = 0; i < myP.length; i++) {
         inputs.push(myP[i].getElementById("libellep").value);
        console.log(myP[i].getElementsByClassName("libellep").value);


    }

    console.log(array);
    console.log(c);
    console.log("++++++++++++++");
}