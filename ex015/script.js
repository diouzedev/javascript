function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 14){
                img.setAttribute ('src', 'imagens/criancamas.jpg')
            }else if ( idade < 21){
                 img.setAttribute ('src', 'imagens/jovemmas.jpg')
            }else if ( idade <= 50){
                 img.setAttribute ('src', 'imagens/adultomas.jpg')
            }else {
                 img.setAttribute ('src', 'imagens/idosomas.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 14){
                 img.setAttribute ('src', 'imagens/criancafem.jpg')
            }else if ( idade < 21){
                 img.setAttribute ('src', 'imagens/jovemfem.jpg')
            }else if ( idade < 50){
                 img.setAttribute ('src', 'imagens/adultafem.jpg')
            }else {
                 img.setAttribute ('src', 'imagens/idosafem.jpg')    
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
}
