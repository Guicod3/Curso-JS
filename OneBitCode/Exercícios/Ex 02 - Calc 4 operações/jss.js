function calc(){
    let number1 = document.getElementById('n1')
    let number2 = document.getElementById('n2')
    let res = document.getElementById('res')
    let calcSoma = Number(number1.value) + Number(number2.value)
    let calcSub = Number(number1.value) - Number(number2.value)
    let calcMult = Number(number1.value) * Number(number2.value)
    let calcDiv = Number(number1.value) / Number(number2.value)
    res.innerHTML = `Soma: ${calcSoma} | Subtração: ${calcSub} | Multiplicação: ${calcMult} | Divisão: ${calcDiv}`
}