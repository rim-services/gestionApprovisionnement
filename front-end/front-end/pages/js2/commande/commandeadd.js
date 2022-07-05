
let temp;
let s=0;
var id =parseInt(localStorage.getItem('myValue'));
let url='http://localhost:8080/gestionApprovisionnement_war/RS/commandee';
let urlf = 'http://localhost:8080/gestionApprovisionnement_war/RS/fournisseur';
let urlp = 'http://localhost:8080/gestionApprovisionnement_war/RS/Produitt';
let urls = 'http://localhost:8080/gestionApprovisionnement_war/RS/stock';

const addCommandeForm = document.querySelector(".forms-sample");

let libelle=document.getElementById("libelle");
let etat=document.getElementById("etat");
let date1= new Date();
date1=date1.toISOString()


let fournisseur=document.getElementById("fournisseur");

var c=0;
var cc=1;
let produit=[];


function afficherStock(){
    fetch(urlf)
        .then(res1 => res1.json())
        .then(data1=>renderStocks(data1))


    const renderStocks =(stocks)=>{
        let  html1='';

        stocks.forEach(stock=>{

            html1+='<option value="'+stock.id+'">'+stock.nom+'</option>';
        })
        document.getElementById("fournisseur").innerHTML=html1;
    }
}
function afficherStock2(){
    fetch(urls)
        .then(res1 => res1.json())
        .then(data1=>renderStocks(data1))


    const renderStocks =(stocks)=>{
        let  html1='';

        stocks.forEach(stock=>{

            html1+='<option value="'+stock.id+'">'+stock.nom+'</option>';
        })
        document.getElementById("stock").innerHTML=html1;
    }
}


function onFormSubmit() {
    addCommandeForm.addEventListener('submit',(e)=>{
        e.preventDefault();
         getProduits();
          produitLoop();
            console.log(fournisseur.value);
            console.log(libelle.value);

            fetch(url,{
                method:'POST',
                body: JSON.stringify({
                    date: date1,
                    etat: etat.value,
                    fournisseur: fournisseur.value,
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
let aa=1;
function  add_more_field(){
    let c=1, cc=1;

    html='<div  class="row1">\
    <div class="card-header"><h6>Produit '+aa+' <br></h6></div>\
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
    var form=document.getElementById('row12')
    form.innerHTML+=html;

    c=c+5;
    cc++;
    aa++;
    afficherStock2();
}

function getProduits(){

    var myP = document.getElementsByClassName("row1");
    let products=[];
    for (var i = 0; i < myP.length; i++) {
        let product = {
            libelle: myP[i].getElementsByClassName("form-control")[0].value,
            prix: myP[i].getElementsByClassName("form-control")[1].value,
            quantity: myP[i].getElementsByClassName("form-control")[2].value,
            date_exp: myP[i].getElementsByClassName("form-control")[3].value,
            stock: myP[i].getElementsByClassName("form-control")[4].value
        };
        console.log(product);
        products.push(product);

    }
    return products;

}
getProduits();

afficherStock();

function produitLoop(){
    let productss=getProduits();
    console.log("hhhhhhhhhhhhhh");
    console.log(productss);
    console.log("hhhhhhhh");
for(let i=0; i<productss.length;i++){

    fetch(urlp,{
        method:'POST',
        body: JSON.stringify({
            libelle: productss[i].libelle,
            prix: productss[i].prix,
            quantite: productss[i].quantite,
            date_Expiration: date1,
            code: "a",
            stock: 1
        }),
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json; charset=UTF-8',
        }
    })
        .then(response => console.log(response))
        .catch(console.error);
    window.location.href="commande.html";

}



}