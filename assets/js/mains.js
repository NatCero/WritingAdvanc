
function contarletras(){

    var total = 400;

    setTimeout(function(){

        var valor = document.getElementById('contador');
        var respuesta = document.getElementById('respuesta');
        var cantidad=valor.value.length;

        document.getElementById('respuesta').innerHTML = cantidad;

    })
}