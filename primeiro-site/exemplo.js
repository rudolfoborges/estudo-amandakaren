let nomeDaPessoa = 'Amanda Karen'

function mudarNome(){
    nomeDaPessoa = 'Rudolfo'
    console.log(nomeDaPessoa)
}

mudarNome()

function mudarNomeComNome(nome){
    let algumaCoisa = nome
}

mudarNomeComNome('Rudolfo 2')
mudarNomeComNome('Brian')

function mudarNomeESobrenome(nome, sobrenome){
    nomeDaPessoa = nome + sobrenome
    console.log('')
}

mudarNomeESobrenome('Amanda', 'Karen')

function funcao1(){

}

function funcao2(funcao){
    funcao()
}

funcao2(funcao1)

nomeDaPessoa = 'teste'

class Carro {

    let nome = 'nome carro'

    function ligar() {
        console.log()
    }

    function andar(){

    }

    function desligar(){

    }
}




function criarCarro(){
    let ferrari = new Carro()
    ferrari.ligar()
    ferrari.andar()
    ferrari.desligar()
    ferrari.nome
}

criarCarro()


function adicionarEvento(evento, funcao){
    if(evento === 'click'){
        funcao()
        console.log('teste')
    }
}

function mostrarAlert(){
    alert('teste')
}

function imprimir(){
    console.log('teste')
}

adicionarEvento('click', mostrarAlert)
adicionarEvento('click', imprimir)
adicionarEvento('click', () => {
    alert('teste 3')
})