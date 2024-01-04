function contar(){
    var base = document.getElementById('ini');
    var final = document.getElementById('fim');
    var pulo = document.getElementById('pass');
    var resultado = document.getElementById('resultado');

    if(base.value.length == 0 || final.value.length == 0 || pulo.value.length == 0){
        window.alert("[ERRO] Insira valores válidos.")
    } else{
        let i = Number(base.value)
        let f = Number(base.value)
        let p = Number(base.value)

        resultado.innerHTML = ('Contando: ')

        for (let c = i; c <= f; c = c + p){
            resultado.innerHTML += `${c}, `
        } 
    }
}