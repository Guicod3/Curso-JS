let valorInicial =  Number(prompt(`BANCO BV\n\nDigite o Valor que deseja depositar:`))
let valorFinal = valorInicial
let respostaSaida = document.getElementById('Encerra')
let respostaf5 = document.getElementById('f5')
let

do{
    let decisaoAddRet = prompt(`Você tem R$${valorFinal},00. Deseja: \n1. Adicionar dinheiro\n2. Retirar dinheiro\n\n3. Sair`)
    switch(decisaoAddRet){

        case '1': let valorADD = Number(prompt(`Digite o valor para adicionar: `))
        valorFinal = valorFinal + valorADD
        break

        case '2': let valorRet = Number(prompt(`Digite o valor para retirar: `))
        valorFinal = valorFinal - valorRet
        break

        case '3': alert('Encerrando...')
        break

    }
}while (decisaoAddRet !== 3)
