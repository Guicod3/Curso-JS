function iniciar(){

    let personagemAtaque = prompt('Nome personagem ataque: ')
let valorDanoAtaque = Number(prompt('Poder de ataque: '))
let personagemDefesa = prompt('Nome personagem defesa: ')
let pontosVidaDefesa = Number(prompt('Quantidade de pontos de vida: '))
let poderDefesa = Number(prompt('Poder de defesa: '))
let temEscudo = prompt('Ele irá ter escudo? [S / N]')
let danoCausado
let res = document.getElementById('centralizar')
    //Ifs para calcular a quantidade de dano causado
    if (valorDanoAtaque > poderDefesa && temEscudo == 'N'){
        danoCausado = valorDanoAtaque - poderDefesa
    } else if(valorDanoAtaque > poderDefesa && temEscudo == 'S'){
        danoCausado = (valorDanoAtaque - poderDefesa) / 2
    } else if (valorDanoAtaque <= poderDefesa){
        danoCausado = 0 
    }

    //Aqui vai mostrar na tela
    if (pontosVidaDefesa - danoCausado <= 0){
        document.body.style.backgroundColor = "red"
        res.innerHTML = `${personagemDefesa} MORREU`
    }
    
    pontosVidaDefesa -= danoCausado


    alert(`Dano Causado: ${danoCausado} || ${personagemAtaque} (${valorDanoAtaque} Ataque) || ${personagemDefesa} (${pontosVidaDefesa} Vida restante | ${poderDefesa} Poder defesa | Escudo: ${temEscudo})`)
}

