var url = "https://jsonplaceholder.typicode.com/photos";

var seccionFotos = document.querySelector('.vistaFotos #fotos');

var miJson = new XMLHttpRequest();

//abrir url para poder hacer la peticion.

miJson.open('GET', url, true);

//envio 

miJson.send();

miJson.addEventListener('readystatechange', cargaArchivo);

function cargaArchivo(event) {

    if (event.target.readyState == 4 && event.target.status == 200) {
        var listaFotos = new Array();

        listaFotos = JSON.parse(event.target.response);

        //console.log(listaFotos);
        pintarFotos(listaFotos);
    }
}

function pintarFotos(pListaFotos) {
    var contenidoAlbum = "";

    for (foto of pListaFotos) {
        contenidoAlbum += `<article id="${foto.id}">
                                    <title>${foto.title}</title>
                                    <img src="${foto.thumbnailUrl}" onclick="ponerImagen(${foto.url})">
                                </article>`
    }
    seccionFotos.innerHTML += contenidoAlbum;
}

function ponerImagen(pUrl) {
    var seccionFotos1 = document.querySelector('.vistaFotos');
    seccionFotos1.innerHTML += `<img src="${pUrl}">`
}




