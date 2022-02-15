function ola(a){
    console.log(a)
}

function somar(a, b){
    const total = a + b
    console.log(total)
}

function somar2(a, b, c){
    const total = a + b + c
    console.log(total)
}

ola('olá função imprimindo meu texto')
ola('olá segunda chamada')
ola('teste')
ola()

let variavelTexto = "Imprimir valor da variavel" //string
const variavelNumero = 10 //number
const variavelBooleana = true // boolean

ola(variavelTexto)
variavelTexto = 'Meu marido é legal!'
ola(variavelTexto)
ola(variavelNumero)

somar(10, 5)
somar2(10, 10, 10)

let c = 10
let d = 50
somar(c, d) //60
c = 50
d = 100
somar(c, d) //150

function somarERetornar(a, b){
    const total = a + b
    return total
}

function mutiplicar(a, b){
    const total = a * b
    return total
}

let retornoDaSoma = somarERetornar(10, 40) //50
console.log(retornoDaSoma)
retornoDaSoma = somarERetornar(100, 100)
console.log(retornoDaSoma)

function funcaoComplexa(){
    let valorRetornado = somarERetornar(10, 10) //20
    let valorRetornado2 = somarERetornar(valorRetornado, 400)
    let valorRetornado3 = mutiplicar(valorRetornado, valorRetornado2)
    console.log(valorRetornado3)
}

funcaoComplexa()

function funcaoComplexaQueRetorna(a, b){
    let total = a + b
    if(total >= 100 && total <= 101){
        total = 1000 + 2000
    } else if(total > 200) {
        total = 1000 * 200
    }

    return total
}

function calcularImposto(valorProduto){
    let valorImposto = valorProduto * 10 //icms
    if(valorImposto > 1000) {
        valorImposto + 200 // iss
    }

    return valorImposto
}


const retorno1 = funcaoComplexaQueRetorna(50, 60)
console.log(retorno1)
const retorno2 = funcaoComplexaQueRetorna(100, 150)
console.log(retorno2)

if(retorno1 === 110){
    console.log('ok ok')
}


//super complexo
const valorComplexo = somarERetornar(somarERetornar(100, 100), somarERetornar(200, 200))
console.log(valorComplexo)

const soma1 = somarERetornar(100, 100)//200
const soma2 = somarERetornar(200, 200)//400

const valorComplexo2 = somarERetornar(soma1, soma2)//600
console.log(valorComplexo2)

const valorComplexo3 = somarERetornar(somarERetornar(somarERetornar(50, 50), 100), somarERetornar(200, 200)) //600
console.log(valorComplexo3)