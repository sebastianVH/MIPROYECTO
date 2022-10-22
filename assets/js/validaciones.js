/*
$().ready(function() {
        // validate the comment form when it is submitted
        $("#form_categoria").validate({

    rules:{
    id_categoria:{
        required: true,
    },
    nombre_categoria:{

        required: true,
    }

},

messages:{
    id_categoria:{
        required: "Ingrese la categoria"
    },

    nombre_categoria:{
        required: "Ingrese el nombre de la categoria"

    }

}

}) });

*/

$("#form_categoria").submit(function(){

    var id_cat = $("#id_categoria").val();
    var nombre_cat = $("#nombre_categoria").val();
    var validacion = [];

    if ($.trim(id_cat) === ''){
        validacion.push("Ingrese el ID de categoria")
    }
    if ($.trim(nombre_cat) === ''){
        validacion.push("Ingrese el nombre de la categoria")
    }
    if (validacion.length >0){
        alert("Se detectaron los siguientes errores:\n"+validacion.join("\n"))
        return false
    } else {
        return true;
    }
})


