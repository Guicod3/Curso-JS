function calc(){
    let nome = document.getElementById('nome')
    let sobreNome = document.getElementById('sobrenome') 
    let estudo = document.getElementById('Estudo')
    let age = document.getElementById('age')
    let res = document.getElementById('res')
    let nameConcat = nome.value + ' ' + sobreNome.value;
    let idade = 2024 - age.value
    res.innerHTML = `Nome: ${nameConcat} | Campo de estudo: ${estudo.value} | Idade: ${idade}`
}