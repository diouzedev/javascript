function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#e0ea95'
    }else if ( hora > 12 && hora <= 18){
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#87cefa'
    }else if (hora > 18) {
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#430a43'
    }
}


