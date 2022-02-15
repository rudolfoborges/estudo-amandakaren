class Animal {
    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
        this.comidas = []
        this.noites = []
        this.distancia = []
    }

    comer(){
        //true true true -> entra
        //true true false -> nao entra
        if(this.tipo === 'peixe' && this.comidas.length > 0 && this.noites.length > 0){
            console.log(`O ${this.nome} já comeu!!! Ele é do tipo ${this.tipo}`)
            return
        }

        console.log(this.nome, 'Comendo...')
        this.comidas.push(3)
    }

    dormir(){
        //true true -> entra
        //false false -> nao entra
        //false true -> entra
        //true false -> entra
        // false false false -> nao entra
        //false false true -> nao entra
        //false true true -> entra
        if(this.tipo === 'urso' || this.noites.length === 0 && this.comidas.length > 0){
            console.log(this.nome, 'Dormindo...')
            this.noites.push(10)
        }
    }

    movimentar(){
        if(this.tipo === 'peixe'){
            console.log(this.nome, 'Nadando...')
        } else if(this.tipo === 'ave'){
            console.log(this.nome, 'voando...')
        } else if(this.tipo === 'Rasteja'){
            console.log(this.nome, 'Rastejando...')
        } else {
            console.log(this.nome, 'Movimentando...')
        }

        this.distancia.push(2)
    }

    andarComerEDomir(){
        this.comer()
        this.movimentar()
        this.dormir()
    }

    verificarSituacaoDoAnimal(){
        let totalComidas = 0
        let totalDistancia = 0
        let totalNoites = 0

        for(const comida of this.comidas){
            totalComidas = totalComidas + comida
        }

        for(const noite of this.noites){
            totalNoites = totalNoites + noite
        }

        for(const andou of this.distancia){
            totalDistancia = totalDistancia + andou
        }

        console.log(this.nome)
        console.log(this.nome, totalComidas)
        console.log(this.nome, totalDistancia)
        console.log(this.nome, totalNoites)
    }
}

const gato = new Animal('Filo')
gato.comer()
gato.comer()
gato.andarComerEDomir()

const cavalo = new Animal('João')
cavalo.andarComerEDomir()

gato.verificarSituacaoDoAnimal()
cavalo.verificarSituacaoDoAnimal()

const peixe = new Animal('Nemo', 'peixe')
peixe.movimentar()
peixe.comer()
peixe.comer()
peixe.dormir()
peixe.comer()
peixe.verificarSituacaoDoAnimal()

const avestruz = new Animal('Teco Teco', 'ave')
avestruz.movimentar()
avestruz.verificarSituacaoDoAnimal()

const cobra = new Animal('Naja', 'Rasteja')
cobra.movimentar()

const urso = new Animal('Bilu', 'urso')
urso.dormir()
urso.dormir()
urso.dormir()

const vaca = new Animal('Mimosa')
vaca.dormir()
vaca.dormir()