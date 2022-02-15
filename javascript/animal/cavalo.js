const comidas = []
const noites = []
const distancia = []

const nome = 'João'

function comer(){
    comidas.push(3)
}

function dormir(){
    noites.push(1)
}

function andar(){
    distancia.push(1)
}

function andarComerEDomir(){
    comidas.push(1)
    noites.push(1)
    distancia.push(1)
}

function verificarSituacaoDoAnimal(){
    let totalComidas = 0
    let totalDistancia = 0
    let totalNoites = 0

    for(const comida of comidas){
        totalComidas = totalComidas + comida
    }

    for(const noite of noites){
        totalNoites = totalNoites + noite
    }

    for(const andou of distancia){
        totalDistancia = totalDistancia + andou
    }

    console.log(nome)
    console.log(totalComidas)
    console.log(totalDistancia)
    console.log(totalNoites)
}

comer()
comer()
comer()
andar()
andar()
dormir()
andarComerEDomir()

verificarSituacaoDoAnimal()