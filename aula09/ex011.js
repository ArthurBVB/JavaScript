var idade = 19
if (idade < 16){
    console.log('Menor de idade e não pode votar')
} else if(idade < 18 || idade > 65) {
        console.log('Pode escolher se vota')
} else{
    console.log('Maior de idade e deve votar')
}