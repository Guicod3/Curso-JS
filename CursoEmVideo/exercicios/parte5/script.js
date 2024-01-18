let a = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    let res = document.getElementById('resultado')
    let entrada1 = document.getElementById('inicio')
    if(isNumero(entrada1.value) && !inLista(entrada1.value, a)){
        a.push(Number(entrada1.value));
        let item = document.createElement('li');
        item.text= `Valor ${entrada1.value} adicionado`;
        res.appendChild(item);
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}
