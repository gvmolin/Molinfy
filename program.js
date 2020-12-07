var tituloPagina= document.querySelector(".titulo-aba");
var autorPagina = document.querySelector(".autor-conteudo");
var capaAlbumAba = document.querySelector('.capa-album-main');
var audio = document.querySelector('audio');


tituloPagina.innerText = data[0].album
autorPagina.innerText = data[0].artist
capaAlbumAba.style.background = `url(${data[0].cover}) no-repeat center center / cover`
audio.src = data[11].file
console.log(data[0].album)


    
function addLista(){
    for (var i = 1; i < data.length; i++) {
        var posData = data[i]
        posData.addLista

        var itemLista = document.createElement('div')
        itemLista.classList.add('item-lista')

        var areaItens = document.querySelector('.musicas-lista')
        
        var itemNovoLista = `
                <h2>..</h2>
                <h2 class="item-lista-titulo">${posData.title}</h2>
                <h2 class="item-lista-album">${data[0].album}</h2>
                <h2 class="item-lista-artista">${data[0].artist}</h2>
                <h2 class="item-lista-dur">--</h2>
            `
        itemLista.innerHTML = itemNovoLista
        areaItens.append(itemLista)
    };
    
}

addLista()