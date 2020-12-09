function montarPagina(){
    var containerConteudo = document.createElement('div')
    containerConteudo.classList.add('container-titulos')
    
    var paginaConteudo = `
        <div class="capa-album-main" style="background : url('${data[0].cover}') no-repeat center center / cover"></div>
        <div class="titulo-aba-container">
            <h1 class="titulo-aba">${data[0].album}</h1>
            <h4 class="autor-conteudo">${data[0].artist}</h4>
        </div>
    `

    containerConteudo.innerHTML = paginaConteudo
    areaSuperior.append(containerConteudo)
}

function addLista(){
    for (var i = 1; i < data.length; i++) {
        var posData = data[i]
        posData.addLista

        var itemLista = document.createElement('div')
        itemLista.classList.add('item-lista')
        
        
        var itemNovoLista = `
                <div onclick="selecionarMusica('${posData.title}', '${data[0].artist}', '${data[0].cover}')">
                <h2>-</h2>
                <h2 class="item-lista-titulo">${posData.title}</h2>
                <h2 class="item-lista-album">${data[0].album}</h2>
                <h2 class="item-lista-artista">${data[0].artist}</h2>
                <h2 class="item-lista-dur">--</h2>
                </div>
            `
        itemLista.innerHTML = itemNovoLista
        areaItens.append(itemLista)
    };
};

function selecionarMusica(){
    audio.src = posData.file
};

function lerPlaylists(){
    var itemPlaylist = document.createElement('li')
    itemPlaylist.innerText = `${data[0].album}`

    playlistsLista.append(itemPlaylist)
};

function selecionarMusica(nome, artista, cover){
    tituloTocador.innerText = nome
    artistaTocador.innerText = artista
    capaAlbumTocador.style.background = `url("${cover}") no-repeat center center / cover`
};

