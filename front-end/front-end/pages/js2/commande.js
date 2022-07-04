var c=1;
function  add_more_field(){
    c+=1;
    html='<div  id="row1'+c+'">\
                                       <div class="form-group row">\
        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Nom</label>\
        <div class="col-sm-9">\
            <input type="text" class="form-control" id="nom" name="nom'+c+'" placeholder="Nom">\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Prenom</label>\
        <div class="col-sm-9">\
            <input type="text" class="form-control" id="prenom" name="prenom'+c+'" placeholder="Prenom">\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Email</label>\
        <div class="col-sm-9">\
            <input type="email" class="form-control" id="email" name="email'+c+'" placeholder="name@example.com">\
        </div>\
    </div>\
    <div class="form-group row">\
        <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Password</label>\
        <div class="col-sm-9">\
            <input type="password" class="form-control" id="password" name="password'+c+'" placeholder="Password">\
        </div>\
    </div>\
</div>'
var form=document.getElementById('commande_form')
form.innerHTML+=html;
}