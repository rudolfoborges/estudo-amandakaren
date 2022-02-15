//classe
class Animal {

    constructor(tipo, nome){
        this.tipo = tipo
        this.nome = nome
    }

    andar() {
        console.log(this.tipo, this.nome, 'andando')
    }

    comer() {
        console.log(this.tipo, this.nome, 'comendo')
    }
    
    dormir() {
        console.log(this.tipo, this.nome, 'dormindo')
    }

    somar(a, b){
        const total = a + b
        return total
    }
}

const gato = new Animal('Gato', 'Filo')
console.log(gato)
gato.andar()
gato.comer()
gato.dormir()
console.log(gato.nome)
const soma = gato.somar(10, 10)

const elefante = new Animal('Elefante', 'Grandão')
console.log(elefante)
elefante.andar()
elefante.comer()
elefante.dormir()

class Produto {
    constructor(nome, quantidade, valor){
        this.nome = nome
        this.quantidade = quantidade
        this.valor = valor
    }

    calcularValorItem() {
        const valorItem = this.valor * this.quantidade
        return valorItem
    }

    alterarQuantidade(novaQuantidade){
        this.quantidade = novaQuantidade
    }

    alterarValorProduto(novoValor){
        this.valor = novoValor
    }
}

class Carrinho {
    constructor(nome){
        this.nome = nome
        this.produtos = []
    }

    adicionarProduto(produto){
        this.produtos.push(produto)
    }

    removerProduto(){
        
    }

    calcularValorTotal(){
        let valorTotal = 0
        for(const produto of this.produtos){
            valorTotal = valorTotal + produto.calcularValorItem()
        }
        return valorTotal
    }

    realizarPagamento() {

    }

    limparCarrinho(){
        this.produtos = []
    }
}

class Loja {
    constructor(nome){
        this.nome = nome
        this.carrinho = new Carrinho(nome)
        this.vendas = []
    }

    calcularFaturamentoAno(){

    }
}

const carrinho = new Carrinho('Carrinho Lojas Americanas')
console.log(carrinho)

const mesa = new Produto('Mesa', 1, 4000)
mesa.alterarValorProduto(4500)
mesa.alterarQuantidade(2)
console.log(mesa)
console.log(mesa.calcularValorItem())

const grama = new Produto('Grama', 2, 400)
console.log(grama)
console.log(grama.calcularValorItem())

carrinho.adicionarProduto(mesa)
console.log(carrinho)

const meuCarrinho = new Carrinho('Meu Carrinho')
meuCarrinho.adicionarProduto(mesa)
meuCarrinho.adicionarProduto(grama)
console.log(meuCarrinho)
console.log(meuCarrinho.calcularValorTotal())
meuCarrinho.limparCarrinho()
console.log(meuCarrinho)