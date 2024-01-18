let carro1 = prompt('Insira o carro: ')
let vel1 = parseFloat(prompt('Insira Velocidade1:'));
let carro2 = prompt('Insira o carro: ')
let vel2 = parseFloat(prompt('Insira Velocidade2:'));

if (vel1 > vel2){
    window.alert(`${carro1} é mais rápido que ${carro2}`)
} else if (vel2 > vel1){
    window.alert(`${carro2} é mais rápido que ${carro1}`)
} else{
    window.alert('Ambos os carros estão na mesma velocidade')
}