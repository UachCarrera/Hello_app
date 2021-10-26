
function mostrar(){
    document.getElementById("primerMensaje").style = "display: normal";
}

function cambiarPantalla(){
    window.open("/siguientes_vistas/index", "_self");
}

function ponerNumero(){
    $.ajax({
        url: '/siguientes_vistas/ponerNumero',
        type: 'GET',
        success: function (data) {
            document.getElementById("numero").innerHTML = data;
        },
        error: function (xhr) {
            alert("Error inesperado");
        }
    });
}

function volver(){
    window.open("/hello_worlds/index", "_self");
}

function users(){
    window.open("/users", "_self");
}