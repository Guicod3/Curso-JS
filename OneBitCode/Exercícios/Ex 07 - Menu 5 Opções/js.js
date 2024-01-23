do{   
    let selecaoMenu = Number(prompt('Escolha uma opção de página\n\n1.Green\n2.Blue\n3.Yellow\n4.Grey\n5. Encerrar'))
    let textoTitulo = document.getElementById('texto')
    switch(selecaoMenu){

        case 1 : document.body.style.backgroundColor = "green"
                textoTitulo.innerHTML = `Verde`
        break

        case 2 : document.body.style.backgroundColor = "blue"
        textoTitulo.innerHTML = `Azul`
        break

        case 3 : document.body.style.backgroundColor = "yellow"
        textoTitulo.innerHTML = `Amarelo`
        break

        case 4 : document.body.style.backgroundColor = "grey"
        textoTitulo.innerHTML = `Cinza`
        break

        case 5 : document.body.style.backgroundColor = "black"
        textoTitulo.innerHTML = `Encerrando...`
        break

        default: document.body.style.backgroundColor = "darkred"
        textoTitulo.innerHTML = `Dê F5 e selecione um valor válido`
    }
} while(selecaoMenu != 5)
