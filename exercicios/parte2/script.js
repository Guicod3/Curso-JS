var tempo = new Date();
var ano = tempo.getFullYear()
var anodigitado = document.getElementById('anonasc');
function verificar(){
    var resultado = document.getElementById('resultado');
    if (anodigitado.value.length == 0 || Number(anodigitado.value) >= ano){
        resultado.innerHTML = `[Ano inválido] Por favor altere o ano acima`;
    }
}

