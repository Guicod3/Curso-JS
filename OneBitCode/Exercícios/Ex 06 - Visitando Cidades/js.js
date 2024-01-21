let nomeTurista = prompt('Olá, digite seu nome')

let jaVisitou = prompt(`${nomeTurista}, você já visitou algum estado? [S / N]`)

let Estados = []

if(jaVisitou.toUpperCase() == 'S'){
    while(jaVisitou.toUpperCase() == 'S'){
        Estados.push(prompt('Qual estado você visitou?'))
        jaVisitou = prompt(`Você já visitou algum outro estado? [S / N]`)
    }
} else if (jaVisitou.toUpperCase() == 'N'){
    alert('Visite algum site de viagens')
} else{
    alert('Insira um valor válido')
}

let resEstados = Estados.join(', ')

alert(`${nomeTurista}\n\nVocê visitou ${Estados.length} estado(s).\nSão eles: ${resEstados}.`)