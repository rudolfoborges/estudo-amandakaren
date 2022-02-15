class Roupas {
    constructor(nome, quantidade, valor, tamanho){
        this.nome = nome 
        this.quantidade = quantidade
        this.valor = valor
        this.tamanho = tamanho
    }

    valortotaldaroupa(){
        let valortotal = this.quantidade * this.valor
        return valortotal
    }
}

const camisaP = new Roupas ('camisa P', 1, 50, 'P')
const camisaM = new Roupas ('camisa M', 1, 50, 'M')
const camisaG = new Roupas ('camisa G', 1, 50, 'G')
const calçaP = new Roupas ('calça P', 1, 110, 'P')
const calçaM = new Roupas ('calça M', 1, 110, 'M')
const calçaG = new Roupas ('calça G', 1, 110, 'G')
const shortsP = new Roupas ('shorts P', 1, 70, 'P')
const shortsM = new Roupas ('shorts M', 1, 70, 'M')
const shortsG = new Roupas ('shorts G', 1, 70, 'G')

class Carrinho{
    constructor(){
        this.carrinho = []
    }


    addroupas(Roupas){
        this.carrinho.push(Roupas)
    }

    somarvalor(){
        let valortotal = 0
        for(const peroupas of this.carrinho)
        {
            valortotal = valortotal + peroupas.valortotaldaroupa()
        }

        console.log(valortotal)
        return valortotal
    }
}

const jessica = new Carrinho()
const brenda = new Carrinho()

jessica.addroupas (camisaP)
jessica.addroupas (camisaP)
jessica.addroupas (camisaP)
jessica.addroupas (calçaP)
jessica.addroupas (calçaP)

brenda.addroupas(shortsP)
brenda.addroupas(shortsM)
brenda.addroupas(camisaP)

console.log(jessica, jessica.somarvalor())
console.log(brenda, brenda.somarvalor())