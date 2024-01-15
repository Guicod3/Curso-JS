function isnumber(n){
    if (n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}

function is_repete(n, f){
    if (n.indexOf(Number(f)) != -1){
        return true
    } else{
        return false
    }
}



function add(){
    let a = []
    let res = document.getElementById('resultado')
    let entrada1 = document.getElementById('inicio')
    if (isnumber(Number(entrada1.value)) && !is_repete(a, entrada1.value)){
        a.push(Number(entrada1.value))
        let item = document.createElement('option');
        item.text = `Valor ${a} adicionado`
        res.appendChild(item)
    } else{
        window.alert('[ERRO] Insira Valores de 1 a 100 não repetidos')
    }
}


