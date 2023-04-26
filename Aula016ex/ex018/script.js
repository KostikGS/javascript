var num = document.getElementById('txtnum')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var val = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function calcular(){
    if(isNumero(num.value) && !inLista(num.value, val)) {
        val.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (val.length == 0){
        alert('Adicione pelo menos 1 valor')
    } else {
        var total = val.length
        var maior = val[0]
        var menor = val[0]
        var media = 0
        var soma = 0
         
         for(var pos in val) {
            soma += val [pos]
            if (val[pos] > maior)
                maior = val[pos]

            if (val[pos] < menor)
                menor = val[pos]

        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, tem ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor é ${maior}.</p>`
        res.innerHTML += `<p> O menor valor é ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${media}.</p>`
    }
    
}