let produto = {
    nome: 'teste',
    quantidade: 5,
    valor: 1
}

const nome = produto.nome

let objVazio = {}
let arrayVazio = []

let arrayComObjVazio = [{}, {}, {}, {}, {}]
console.log(arrayComObjVazio.length)
console.log(arrayVazio.length)

const produtos = [
    {
        nome: 'mesa',
        quantidade: 1,
        valor: 4000
    },
    {
        nome: 'grama',
        quantidade: 2,
        valor: 400
    },
    {
        nome: 'TV',
        quantidade: 3,
        valor: 3000
    }
]

let valorTotal = 0

for(const produto of produtos){
    console.log(produto)
    console.log(produto.nome)
    console.log(produto.valor)
    console.log(produto.quantidade)

    const valorItem = produto.quantidade * produto.valor 
    console.log(valorItem)
    valorTotal = valorTotal + valorItem

}

console.log(valorTotal)