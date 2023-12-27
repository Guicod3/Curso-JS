function verificar(){    
    var tempo = new Date()
    var ano = tempo.getFullYear()
    var iptano = document.getElementById('anonasc');
    var res = document.getElementById('resultado');
    if (iptano.value.length == 0 || Number(iptano.value) >= ano){
        window.alert('[ERRO] Por favor, insira um ano válido.');
    } else{
        //var sex = document.getElementByname('radsex');
        var idade = ano - Number(iptano.value);
        res.innerHTML = `A idade correspondente é: ${idade} anos`;
    }
}


