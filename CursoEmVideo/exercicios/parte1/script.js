var msg = document.getElementById('msg')
var img = document.getElementById('img')
var titulo = document.getElementById('titulo')
var tempo = new Date()
var hora = tempo.getHours()
var minuto = tempo.getMinutes()
function carregar(){
    msg.innerHTML = (`Agora são ${hora} horas e ${minuto} minutos.`)
    if(hora < 12 && hora >= 0){
        titulo.innerHTML = ('BOM DIA')
        img.src = 'imagens/Manhã.png'
        document.body.style.background = '#BFB30B'
    } else {
        if (hora < 18){
            titulo.innerHTML = ('BOA TARDE')
            img.src = 'imagens/Tarde.png'
            document.body.style.background = '#F28907'
        } else{
            titulo.innerHTML = ('BOA NOITE')
            img.src = 'imagens/Noite.png'
            document.body.style.background = '#171C26'
        }
    }
}
    

