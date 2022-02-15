let contador = 1

function adicionarAtividades(){
    let inputAtividade = document.getElementById('input-atividade') // input text

    if(!inputAtividade.value){
        alert('Por favor digite o nome da atividade')
        return
    }

    contador = contador + 1

    let checkbox = criarCheckbox()
    let texto =  criarTexto(inputAtividade.value)
    let elementoDaLista = criarElementoDaLista(checkbox, texto)

    let listaAtividades = document.getElementById('lista-atividades')
    listaAtividades.appendChild(elementoDaLista)
    inputAtividade.value = ''
}

function criarCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = contador
    checkbox.addEventListener('change', concluirAtividade)

    return checkbox
}

function criarTexto(textoDigitado){
    let texto = document.createElement('span')
    texto.append(textoDigitado)

    return texto
}

function criarElementoDaLista(checkbox, texto){
    let elementoDaLista = document.createElement('li');
    elementoDaLista.id = 'atividade-' + contador
    elementoDaLista.appendChild(checkbox)
    elementoDaLista.appendChild(texto)

    return elementoDaLista
}


function concluirAtividade(evento){
    let concluido = evento.target.checked
    let id = evento.target.id
    let liAtividade = document.getElementById('atividade-' + id)

    if(concluido === true){
        liAtividade.classList.add('concluido')
    } else {
        liAtividade.classList.remove('concluido')
    }
}