let entradaValor = Number(prompt('BEM VINDO A CALCULADORA DE 1 A 20\n\nDigite um número para ser calculado:'))

let resultadoConcat = ''

for (let i = 0; i <= 20; i++){
    resultadoConcat += `> ${entradaValor} x ${i} = ${entradaValor*i}\n` 
}

alert(resultadoConcat)