const produtos = ['mesa', 'grama', 'TV']
const valores = [4000, 400, 3000]

produtos.forEach((produto, index) => (console.log(produto, valores[index])))
const total = valores.reduce((v1, v2) => v1 + v2)
console.log(total)