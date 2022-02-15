//criar um carrinho de comprar que permita adicionar produtos,
// os produtos devem ter nome, valor e quantidade
// deve ser possível somar o valor total
// deve ser possível limpar o carrinho em caso de desistência 

const produtos = [
    {
        nome: 'mesa',
        valor: 4000,
        quantidade: 1
    },
    {
        nome: 'grama',
        valor: 400,
        quantidade: 2
    },
    {
        nome: 'tv',
        valor: 3000,
        quantidade: 3
    }

]

let valortotal = 0

for(const produto of produtos){
    console.log(produto.nome)
    console.log(produto.valor)
    console.log(produto.quantidade)
    valortotal = valortotal + (produto.valor * produto.quantidade)
    
}

console.log(valortotal)