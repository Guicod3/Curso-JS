function contar(){
    var base = document.getElementById('ini');
    var final = document.getElementById('fim');
    var pulo = document.getElementById('pass');
    var resultado = document.getElementById('resultado');

    if(base.value.length == 0 || final.value.length == 0 || pulo.value.length == 0){
        window.alert("[ERRO] Insira valores válidos.")
    } else{
        let i = Number(base.value)
        let f = Number(final.value)
        let p = Number(pulo.value)

        resultado.innerHTML = 'Contando: '
        if (p <= 0){
            window.alert('VALOR INVÁLIDO, CONSIDERANDO PASSO = 1')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{1F449} `
            } 
        } else if(i > f){
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449} `
            } 
        } else if( i == f){
            window.alert('[ERRO] Valores iguais de início e fim.')
    }
}}