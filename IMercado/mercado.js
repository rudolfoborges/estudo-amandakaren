class Produto {
    constructor(nome, valor){
        this.nome = nome
        this.valor = valor
    }
}

class ItemEstoque {
    constructor(produto, quantidade){
        this.produto = produto
        this.quantidade = quantidade
    }
}

class Estoque {
    constructor(){
        this.itens = []
    }

    adicionarProtudoAoEstoque(produto, quantidade){
        const itemEstoque = new ItemEstoque(produto, quantidade)
        this.itens.push(itemEstoque)
    }

    removerProdutoDoEstoque(produto, quantidade){
        
    }
}

class Caixa {
    constructor(numeroDoCaixa){
        this.numeroDoCaixa = numeroDoCaixa
    }
}

class Carrinho {
    constructor(){
        this.produtos = []
    }

    adicionarProduto(produto)
}

class Mercado {
    constructor(nome){
        this.nome = nome
        this.estoque = new Estoque()
    }
}