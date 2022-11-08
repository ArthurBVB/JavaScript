let num = [5,4,8,9]
num.push(7) // add ultimo numero de qualquer array

//num.sort() ---esse aqui coloca em ordem--

/*console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)
for(let pos = 0; pos<num.length; pos++){
console.log(num[pos])
}*/
for(let pos in num){
    console.log(`${num[pos]} o numero 9 esta na posicao${num.indexOf(9)}`)
}