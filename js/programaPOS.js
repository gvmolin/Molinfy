function selecionarMusica(nome, artista, cover) {
    tituloTocador.innerText = nome
    artistaTocador.innerText = artista
    capaAlbumTocador.style.background = `url("${cover}") no-repeat center center / cover`
};

