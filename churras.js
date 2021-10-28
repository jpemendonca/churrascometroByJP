/*

- Carne: 400g por pessoa, mas se durar +6h 650g por pessoa
- Cerveja: 1200ml por pessoa, mas se durar +6h 2000ml
- Agua/Refri: 1000ml por pessoa, mas se durar +6h 1500

*/


// function calcular(pessoas, horas) {
//     if(horas > 6) {

//         return `${pessoas} pessoas vai consumir ${650 * pessoas}g de carne,
// ${2000 * pessoas}ml de cerveja e ${1500 * pessoas}ml de refri/agua `

//     }

//     return `${pessoas} pessoas vai consumir ${400 * pessoas}g de carne,
// ${1200 * pessoas}ml de cerveja e ${1000 * pessoas}ml de refri/agua `
// }

// console.log(calcular(1,7))
// console.log(calcular(1, 4))
// console.log(calcular(3, 4))

let numAdultos = document.getElementById('adultos')
let numCriancas = document.getElementById('criancas')
let duracao = document.getElementById('duracao')

// console.log(numAdultos.value, numCriancas.value, duracao.value)

let resultado = document.getElementById('resultado')

function calcular() {
    
    let adultos = numAdultos.value 
    let criancas = numCriancas.value
    let horas = duracao.value

    if (horas >= 6) {

        resultado.innerHTML =`Você vai precisar de ${((650*adultos) + (325*criancas))/1000}Kg de carne, 
${Math.ceil((2000 * adultos)/350)} latinhas de cerveja e ${Math.ceil(((1500 * adultos) + (750 * criancas))/2000)} garrafas de água/refri (de 2L)`
    }

   else {
       resultado.innerHTML = `Você vai precisar de ${((400*adultos) + (200*criancas))/1000}Kg de carne, 
${Math.ceil((1200 * adultos)/350)} latinhas de cerveja e ${Math.ceil(((1000 * adultos) + (500 * criancas))/2000)} garrafas de água/refri (de 2L)`
}
}