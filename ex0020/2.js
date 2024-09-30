let valor = [9, 7 , 6 , 8, 5,3]
/*
for(let pos=0;pos< valor.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}
    */
valor.sort()
for (let pos in valor){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}