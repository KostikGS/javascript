function tabuada(){
    var num = document.getElementById ('txtnum')
    var tabuada = document.getElementById ('tab')
    
    if(num.value.length == 0){
        alert ('Digite um número')
    } else {
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            
            tabuada.appendChild(item)
            c++
        }
    }
}