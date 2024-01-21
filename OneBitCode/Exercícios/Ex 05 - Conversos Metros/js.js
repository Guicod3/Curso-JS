let numConversao = Number(prompt('Informe a medida em Metros: '))

let medidaEscolhida = prompt('Você deseja converter para qual formato?\n\nDigite apenas a sigla\nMilímetro (mm)\nCentímetro (cm)\nDecímetro (dm)\nDecâmetro (dam)\nHectômetro (hm)\nQuilômetro (km)')

let valorConvertido

switch(medidaEscolhida.toLowerCase()){
    case 'mm': valorConvertido = numConversao * 1000
        alert(`${numConversao} metros convertido para milímetros fica: ${valorConvertido} mm\nDica: Multiplique o valor por 1000`)
        break
    case 'cm': valorConvertido = numConversao * 100
        alert(`${numConversao} metros convertido para centímetros fica: ${valorConvertido} cm\nDica: Multiplique o valor por 100`)
        break
    case 'dm': valorConvertido = numConversao * 10
        alert(`${numConversao} metros convertido para decímetro fica: ${valorConvertido} dm\nDica: Multiplique o valor por 10`)
        break
    case 'dam': valorConvertido = numConversao / 10
        alert(`${numConversao} metros convertido para decâmetro fica: ${valorConvertido} dam\nDica: Divida o valor por 10`)
        break
    case 'hm': valorConvertido = numConversao / 100
        alert(`${numConversao} metros convertido para hectômetro fica: ${valorConvertido} hm\nDica: Divida o valor por 100`)
        break
    case 'km': valorConvertido = numConversao / 1000
        alert(`${numConversao} metros convertido para quilômetro fica: ${valorConvertido} km\nDica: Divida o valor por 1000`)
        break
    default: alert(`Por favor, insira uma medida válida`)
        break
}