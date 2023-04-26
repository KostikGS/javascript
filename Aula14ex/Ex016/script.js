function contar (){
    var inicio = document.getElementById ('txtinicio')
    var fim = document.getElementById ('txtfim')
    var passo = document.getElementById ('txtpasso')
    var res = document.getElementById ('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Revise os dados')
        res.innerHTML = ('Não foi possível contar!')

    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0) {
            alert('Passo invalido, iniciando em 1')
            p = 1
        }
        //contagem crescente
        if(i < f) {
            for(var c=i; c<=f; c+=p){
                res.innerHTML += ` ${c} \u{27A1}`
        }

        } else {
            //contagem regressiva
            for(var c=i; c>=f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }  
        }
        res.innerHTML += `\u{1F51A}`
    }
}