function tabuada(){
    let number = document.getElementById('inicio');
    let res = document.getElementById('valor');
    if (number.value.length == 0){
        window.alert('[ERRO] Valor inserido é inválido.')
    } else {
        let n = Number(number.value)
        let r = res
        let v = 0 // VALOR A SER MULTIPLICADO PRIMEIRO) 
        for( c = v; c <= 11; c + 1){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            r.appendChild(item)
        }
    }
}