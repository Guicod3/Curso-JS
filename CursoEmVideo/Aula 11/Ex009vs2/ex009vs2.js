function qualpais(){
    var pais = document.getElementById('namepais')
    var pais1 = String(pais.value)
    if (pais1 == "Brasil" || pais1 == "brasil"){
        document.getElementById('resposta').innerHTML += "<p>Você é Brasileiro(a)</p>"
    }else{
        document.getElementById('resposta').innerHTML += "<p>You're a Foreign</p>"
    }
}