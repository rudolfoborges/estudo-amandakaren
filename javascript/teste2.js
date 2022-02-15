//Criar listas para armazenar produtos e valores
//Percorrer todos os itens do array mostrando os valores de cada item
//Percorrer todos os produtos o mostrar o valor total

let produtos = ['mesa','grama','TV']
let valores =[4000, 400, 3000]

for(const produtoper of produtos){
    let posiproduto = produtos.indexOf(produtoper)
    let valordoproduto = valores[posiproduto]//valores[1] 
    console.log(produtoper)
    console.log(valordoproduto)
}

let quant = produtos.length
console.log(quant)

let valorTotal = 0

//0
//4000
//4400
//7400
for(const valorProduto of valores){
    valorTotal = valorTotal + valorProduto
}

console.log(valorTotal)