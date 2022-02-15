//criar uma calculadora que permita somar, subtrair, mutiplicar e dividir
// a calculadora deve realizar as seguintes operações:
// soma -> 100 + 200
// soma -> 10 + 400
// subtrair -> 10 -5
// mutiplicar -> 8 * 8
// dividir -> 2000 / 10
// os valores devem ser impressos no console.log()

function somar(a, b){
    const total = a + b 
    return total
}

let soma1 = somar(100, 200)
console.log(soma1)
let soma3 = somar(soma1,20)
console.log(soma3)

let soma2 = somar(10, 400)
console.log(soma2)

let soma4 = somar(soma2,soma3)
console.log(soma4)