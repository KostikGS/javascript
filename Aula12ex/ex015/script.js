function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('VERIFIQUE AS INFORMAÇÕES DIGITADAS')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        res.innerHTML = `resultado ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/crianca-h.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-h.jpg')
                //Adulto
            } else {
                img.setAttribute('src', 'imagens/idoso-h.jpg')
                //Idoso
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/crianca-f.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.jpg')
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}