function verificar(){    
    var tempo = new Date()
    var ano = tempo.getFullYear()
    var iptano = document.getElementById('anonasc');
    var res = document.getElementById('resultado');
    if (iptano.value.length == 0 || Number(iptano.value) >= ano){
        window.alert('[ERRO] Por favor, insira um ano válido.');
    } else{
        var sex = document.getElementsByName('radsex');
        var idade = ano - Number(iptano.value);
        var genero = ''
        if (sex[0].checked){
            genero = 'homem'
        } else if (sex[1].checked){
            genero = 'mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    } 
}


