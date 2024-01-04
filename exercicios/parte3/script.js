function contar(){
    var base = document.getElementById('ini');
    var final = document.getElementById('fim');
    var pulo = document.getElementById('pass');
    var resultado = document.getElementById('resultado');
    for (var base; base <= final; base = base + Number(pulo.value)){
        resultado.innerHTML = `${base}, `
    }
}