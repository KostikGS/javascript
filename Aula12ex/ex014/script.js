function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src= "imagens/img-dia.jpg"
        document.body.style.background = '#df8d55'
    } else if (hora>=12 && hora <=18){
        img.src= "imagens/img-tarde.jpg"
        document.body.style.background = '#318db6'
    } else{
        img.src= "imagens/img-noite.jpg"
        document.body.style.background = '#031e3b'
    }
}
