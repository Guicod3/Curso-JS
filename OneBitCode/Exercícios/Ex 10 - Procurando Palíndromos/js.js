let palavraInicial = prompt("BEM VINDO AO TESTADOR DE PALÍNDROMOS\n\nPor favor, digite uma palavra:")
let palavraContrario = ""

for(let i = palavraInicial.length-1; i >= 0; i--){
    palavraContrario += palavraInicial[i]
}

if(palavraInicial == palavraContrario){
    alert(`Essa palavra é um palíndromo, pois são iguais mesmo invertidas`)
} else{ 
    alert(`A palavra ${palavraInicial} invertida fica: ${palavraContrario}, como não são iguais, não são palíndromos`)
}