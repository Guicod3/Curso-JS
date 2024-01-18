function tabuada(){
    let number = document.getElementById('inicio');
    let res = document.getElementById('valor');
    if (number.value.length == 0){
        window.alert('[ERRO] Valor inserido é inválido.')
    } else {
        res.innerHTML = ''
        let n = Number(number.value)
        let v = 0 // VALOR A SER MULTIPLICADO PRIMEIRO) 
        for(c = v; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
}