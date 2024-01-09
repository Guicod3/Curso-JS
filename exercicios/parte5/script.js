function analisar(){
    let entrada1 = document.getElementById('inicio')
    let res = document.getElementById('resultado')
    
    if (entrada1.value.length == 0){
        window.alert('[ERRO] Campo insert vazio')
        } else if (Number(entrada1.value) < 1 || Number(entrada1.value) > 100){
            window.alert('[ERRO] Insira Valores de 1 a 100')
            } else{
                let a = []
                a.push(Number(entrada1.value))
            }
} 