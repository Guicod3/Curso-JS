
function add(){
    let entrada1 = document.getElementById('inicio')
    let res = document.getElementById('resultado')
    let a = []
    let c = -1
   
    if (entrada1.value.length == 0){
        window.alert('[ERRO] Campo insert vazio')
        } else if (Number(entrada1.value) < 1 || Number(entrada1.value) > 100 || a.indexOf(Number(entrada1.value)) != -1){
            window.alert('[ERRO] Insira Valores de 1 a 100 não repetidos')
            } else{
                a.push(Number(entrada1.value))
                let item = document.createElement('option');
                item.text = `Valor ${a} adicionado.`
                res.appendChild(item)
            }
        }