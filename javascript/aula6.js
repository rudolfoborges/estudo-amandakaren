const produtos = ['uno', 'peugeot', 'tcross', 'ferrari']

for(const produto of produtos){
    console.log('1:', produto)
}

for(let i = 0; i < produtos.length; i++){
    console.log('2:', produtos[i])
}

let i = 0
while(i < produtos.length){
    console.log(produtos[i])
    i = i + 1
}

console.log(i)

produtos.forEach((item) => {
    console.log('4:', item)
})

produtos.forEach(function(produto) {
    console.log(produto)
})

function imprimeValorArray(produto){
    console.log('5:', produto)
}

produtos.forEach(imprimeValorArray)
produtos.forEach(imprimeValorArray)
produtos.forEach(imprimeValorArray)

const novoArray = produtos.filter((p) => p === 'uno')
console.log(novoArray)

const valores = [10, 20, 30, 40, 50, 60]
const soma = valores.reduce((p1, p2) => p1 + p2)
//10, 20 -> 30
//30, 30 -> 60
//60, 40 -> 100
//100, 50 -> 150
//150, 60 -> 210
//soma = 210
console.log(soma)

class Carrinho {
    constructor(valor){
        this.valor = valor
    }
}

const carrinho1 = new Carrinho(10)
const carrinho2 = new Carrinho(20)
const carrinho3 = new Carrinho(30)
//const carrinhos = [carrinho1, carrinho2, carrinho3]
const carrinhos = []
carrinhos.push(carrinho1)
carrinhos.push(carrinho2)
carrinhos.push(carrinho3)

console.log(carrinhos)

const somaDaosCarrinhos = carrinhos
                                .map((c) => c.valor)
                                .reduce((v1, v2) => v1 + v2)
console.log(somaDaosCarrinhos)

const arrayDeTextos = ['eu', 'você', 'eles']
const novoArrayDeTextos = arrayDeTextos.map((t) => t.toUpperCase())
console.log(novoArrayDeTextos)
