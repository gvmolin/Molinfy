function montarPagina(dir){
    var containerConteudo = document.createElement('div')
    containerConteudo.classList.add('container-titulos')
    
    var paginaConteudo = `
        <div class="capa-album-main" style="background : url('${dir[0].cover}') no-repeat center center / cover"></div>
        <div class="titulo-aba-container">
            <h1 class="titulo-aba">${dir[0].album}</h1>
            <h4 class="autor-conteudo">${dir[0].artist}</h4>
        </div>
    `

    containerConteudo.innerHTML = paginaConteudo
    areaSuperior.append(containerConteudo)

    addLista(dir)
}

function addLista(dir){
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