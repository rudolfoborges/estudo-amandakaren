//array
const produto1 = 'mesa'
const produto2 = 'grama'
const produto3 = 'colher'
let produto4 = 'celular'
let produto5 = null

const produtos = ['mesa', 'grama', 'colher'] // -> 0
const valores = [4000, 400, 10]

produtos.push('celular')
valores.push(5000)

console.log(produtos.length)
console.log(produtos)
console.log(valores)

produtos[0]
valores[0]

let valorProdutoNoArray = produtos[0]
console.log(valorProdutoNoArray)
valorProdutoNoArray = produtos[3]
console.log(valorProdutoNoArray)

//nao deve usar
//produtos.push(6000)
//console.log(produtos[4])

console.log(produtos[0])
console.log(produtos[1])
console.log(produtos[2])
console.log(produtos[3])

produtos.push('moto')

for(const produtoSelecionado of produtos){
    console.log(produtoSelecionado)
}

produtos.push('carro')

const posicao = produtos.indexOf('moto')
console.log(posicao)
