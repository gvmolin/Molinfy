function montarPagina(dir){
    areaSuperior.innerHTML = ""
    var containerConteudo = document.createElement('div')
    containerConteudo.classList.add('aba-titulos')
    
    var paginaConteudo = `
        <div class="container-titulos">
            <div class="capa-album-main" style="background : url('${dir[0].cover}') no-repeat center center / cover"></div>
            <div class="titulo-aba-container">
                <h1 class="titulo-aba">${dir[0].album}</h1>
                <h4 class="autor-conteudo">${dir[0].artist}</h4>
            </div>
        </div>

        <div class="label-lista">
            <h2>#</h2>
            <h2>TITULO</h2>
            <h2>ALBUM</h2>
            <h2>ARTISTA</h2>
            <h2>DURACAO</h2>
        </div>
        <hr style="width: 98%;"/>
        `

    containerConteudo.innerHTML = paginaConteudo
    areaSuperior.append(containerConteudo)
    addLista(dir)

    /*tituloPagina.innerHTML = dir[0].album
    autorPagina.innerHTML = dir[0].artist
    capaAlbumAba.style.background = `url('${dir[0].cover}') no-repeat center center / cover`
    console.log(dir[0].album)
    addLista(dir)*/
}

function addLista(dir){
    areaItens.innerHTML = ""
    for (var i = 1; i < dir.length; i++) {
        var posData = dir[i]

        var itemLista = document.createElement('div')
        itemLista.classList.add('item-lista')
        
        
        var itemNovoLista = `
                <div onclick="selecionarMusica('${posData.title}', '${dir[0].album}', '${dir[0].cover}')">
                <h2>-</h2>
                <h2 class="item-lista-titulo">${posData.title}</h2>
                <h2 class="item-lista-album">${dir[0].album}</h2>
                <h2 class="item-lista-artista">${dir[0].artist}</h2>
                <h2 class="item-lista-dur">--</h2>
                </div>
            `
        itemLista.innerHTML = itemNovoLista
        areaItens.append(itemLista)

    };
};

function lerPlaylist(dir){
    var itemPlaylist = document.createElement('li')
    itemPlaylist.innerHTML = `<div><h3>${dir[0].album}</h3></div>`
    
    itemPlaylist.addEventListener('click',() => {montarPagina(dir)})
    playlistsLista.append(itemPlaylist)
};

export {lerPlaylist};