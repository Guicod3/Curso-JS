var idade = -14
if (idade < 16) {
    console.log('Você ainda não pode votar.') 
} else{
    if (idade < 18){
        console.log('Você pode votar, mas não é obrigatório')
    }   else{
        console.log('O seu voto é obrigatório')
    }
}