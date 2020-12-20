var isPlaying = false;
playerPlay.addEventListener('click', () => {
    if(!isPlaying){
        audio.play()
        isPlaying = true
        imgPlayerPLay.src = "./img/pause.png"
    }else{
        audio.pause()
        isPlaying = false
        imgPlayerPLay.src = "./img/play.png"
    }
});

function selecionarMusica(nome, artista, cover, data) {
    tituloTocador.innerText = nome
    artistaTocador.innerText = artista
    capaAlbumTocador.style.background = `url("${cover}") no-repeat center center / cover`
    audio.src = data
    audio.play()
    isPlaying = true
    imgPlayerPLay.src = "./img/pause.png"
    TimeAtt(audio)
};

function secondsToMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
};

function TimeAtt(data){
    audio.onloadedmetadata = ()=>{tempoTotal.innerText = secondsToMinutes(data.duration)}
};

audio.addEventListener('timeupdate', ()=>{
    tempo.innerText = secondsToMinutes(audio.currentTime)
    barra.max = audio.duration
    barra.value = audio.currentTime
});

barra.addEventListener('change', ()=>{
    audio.currentTime = barra.value
});

audio.muted = false
volumeButton.addEventListener('click', ()=>{
    if(!audio.muted){
        audio.muted = true
        volumeButtonImg.src = "./img/muted.png"
    }else{
        audio.muted = false
        volumeButtonImg.src = "./img/volume-icon.png"
    }
});

barraVol.addEventListener('change', ()=>{
    audio.volume = barraVol.value/100
    if(audio.volume == 0){
        volumeButtonImg.src = "./img/muted.png"
    }else{
        volumeButtonImg.src = "./img/volume-icon.png"
    }
});

window.onscroll = function() {myFunction()};
var body = document.querySelector('body')
function myFunction() {
  if (document.janelaMain.scrollTop > 10 || document.body.scrollTop > 10) {
    console.log('dnsjbds')
  }
}
