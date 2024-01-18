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
        var img = document.getElementById('foto');
        if (sex[0].checked){
            genero = 'homem'
            document.body.style.background = "#1b50fc";
            if(idade == 1){
                img.src = 'img/bebehomem.png';
            } else if (idade > 1 && idade <= 14){
                img.src = 'img/criançahomem.png';
            } else if (idade > 14 && idade <= 27){
                img.src = 'img/jovemhomem.png';
            } else if (idade > 27 && idade <= 55){
                img.src = 'img/adultohomem.png';
            } else if (idade > 55 && idade <= 110){
                img.src = 'img/velhohomem.png';
            }
        } else if (sex[1].checked){
            genero = 'mulher'
            document.body.style.background = "#cc4dff";
            if(idade == 1){
                img.src = 'img/bebemulher.png';
            } else if (idade > 1 && idade <= 14){
                img.src = 'img/criançamulher.png';
            } else if (idade > 14 && idade <= 27){
                img.src = 'img/jovemmulher.png';
            } else if (idade > 27 && idade <= 55){
                img.src = 'img/adultamulher.png';
            } else if (idade > 55 && idade <= 110){
                img.src = 'img/velhamulher.png';
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`;
    } 
}


