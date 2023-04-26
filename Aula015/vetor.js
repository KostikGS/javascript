var valores = [4, 5, 6, 8, 7, 2]
console.log(valores)
for (var pos in valores){
   
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
   
}
valores.sort()
var pos = valores.indexOf(2)
console.log (`O valor 2 está na posição ${pos}`)

/*
for (var pos=0; pos < valores.length; pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/