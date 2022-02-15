// criar uma classe que represente produto
// o produto deve saber calcular o valor total do item quantidade * valor
// criar uma classe Carrinho que deve guardar a quantidade de produtos
// calcular o valor total de dos produtos no carrinho
// no final deve ser possível limpar carrinho 
// criar uma classe mercado de onde você poderá pegar um carrinho

class Produto {
    constructor(nome, quantidade, valor){
        this.nome = nome
        this.quantidade = quantidade
        this.valor = valor
    }    
    
    calvalorproduto(){
        let valortotal = this.quantidade * this.valor
        return valortotal
    }
}

class Carrinho {
    constructor (){
        this.produtos = []
    }
    addpro(algumacoisa){
        this.produtos.push(algumacoisa)
    
    }
}

class Caixa {
    constructor(carrinho){
        this.carrinho = carrinho
    }

    calcularTotalDaCompra() {
        let valortotal=0
        for(const produto of this.carrinho.produtos){
            valortotal = valortotal + produto.calvalorproduto()
        }
        return valortotal
    }
}

class Mercado {
    constructor(nome){
        this.nome = nome
        this.carrinhos = []
    }

    pegarCarrinho() {
        const carrinho = new Carrinho()
        this.carrinhos.push(carrinho)
        return carrinho
    }

    irAoCaixa(carrinho){
        const caixa = new Caixa(carrinho)
        const valorTotalDaCompra = caixa.calcularTotalDaCompra()
        return valorTotalDaCompra
    }
}

const meuMercado = new Mercado('Mercado Extra')
const meuCarrinho = meuMercado.pegarCarrinho()

const limao = new Produto('limão', 1, 3.0)
const suco = new Produto('suco', 1, 2.5 )
const milho = new Produto('milho', 1, 5.0)

meuCarrinho.addpro(limao)
meuCarrinho.addpro(suco)
meuCarrinho.addpro(milho)

const valorTotalDaCompra = meuMercado.irAoCaixa(meuCarrinho)
console.log(meuMercado)
console.log('Valor total da compra:', valorTotalDaCompra)



        
    

