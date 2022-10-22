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
        alert("Se detectaron los siguientes errores:\n"+validacion.join("\n")+"\nSebastian Yacono")
        return false
    } else {
        return true;
    }
})

$("#form_productos").submit(function(){

    var id_prod = $("#id_producto").val();
    var nombre_prod = $("#nombre_producto").val();
    var descripcion =$("#descripcion").val();
    var precio_prod=$("#precio_producto").val();
    var categoria=$("#categoria").val();
    var validacion = [];

    if ($.trim(id_prod) === ''){
        validacion.push("Ingrese el ID del producto")
    }
    if ($.trim(nombre_prod) === ''){
        validacion.push("Ingrese el nombre del producto")
    }
    if ($.trim(descripcion) === ''){
        validacion.push("Ingrese una descripcion")
    }
    if ($.trim(precio_prod) === ''){
        validacion.push("Ingrese un valor")
    }
    if ($.trim(categoria) === ''){
        validacion.push("Seleccione una categoria")
    }
    if (validacion.length >0){
        alert("Se detectaron los siguientes errores:\n"+validacion.join("\n")+"\nSebastian Yacono")
        return false
    } else {
        return true;
    }
})
