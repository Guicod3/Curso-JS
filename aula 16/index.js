function acao(n){
    if(n%2 == 0){
        return 'par'
    } else{
        return 'ímpar'
    }
}

let number = acao(3)
console.log(`${number}`)