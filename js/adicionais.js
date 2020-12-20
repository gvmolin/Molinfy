var avatarMostrando = false
avatar.addEventListener('click', ()=>{
    if(!avatarMostrando){
        avatarOnClick.style.display = "initial"
        avatar.style.backgroundColor = "rgb(41, 41, 41)"
        avatarMostrando = true

        
    }else{
        avatarOnClick.style.display = "none"
        avatar.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
        avatarMostrando = false
    }
});

inicio.addEventListener('click', ()=>{
    areaItens.innerHTML = ""
    areaSuperior.innerHTML = ""
    var apresentacao = document.createElement('div')
    apresentacao.classList.add('apresentacao')
    
    var apresentacaoConteudo = 
    `
    <div class="apresentacao">
        <h1>Projeto portfolio "Molinfy - clone Spotify".</h1>
        <h2>Por: Gabriel Molin.</h2>
        <h1>Contatos:</h1>
        <div class="contatos">
            <div class="contato-item">
                <div><img src="img/github-icon.svg" alt=""></div>
                <h2>Github</h2><h3>github.com/gvmolin</h3>
            </div>

            <div class="contato-item">
                <div></div>
                <h2>Linkedin</h2><h3>www.fdfdf.com.br</h3>
            </div>

            <div class="contato-item">
                <div></div>
                <h2>Facebook</h2><h3>facebook.com/gvmolin</h3>
            </div>

            <div class="contato-item">
                <div></div>
                <h2>Email</h2><h3>molingv@hotmail.com</h3>
            </div>
            
            <div class="contato-item">
                <div></div>
                <h2>Telefone/Whatsapp</h2><h3>+55 11 983411315</h3>
            </div>
        </div>
        <h3>Nenhuma musica ou conteudo autoral foi utilizado de forma a lucrar, todo o conteudo da pagina visa somente a criar exemplos do funcionamento do programa.</h3>
    </div>
    `
    apresentacao.innerHTML = apresentacaoConteudo
    areaSuperior.append(apresentacao)
});