//no aeroporto devo verificar se o passagueiro deve ter acesso ao Brasil
//para ter acesso ao Brasil precisa seguir algumas regras
//regra 1 - ser brasileiro
//regra 3 - ser americano, americanos sempre terão acesso ao Brasil
//regra 4 - ser inglês e não ter entrado no Brasil nos últimos anos
//regra 5 - se for alemão não pode ser nazista
//regra 6 - se não for nenhuma das outras nacionalidades, não pode entrar no Brasil
//a saída esperada é: pode entrar ou não pode entrar


function chegarNoAeroporto(nacionalidade, esteveNoBrasilNosUltimosAnos, naoENazista){
    if((nacionalidade === 'brasileiro' || nacionalidade === 'americano') 
    || (nacionalidade === 'alemao' && naoENazista === false)
    || (nacionalidade === 'ingles'&& esteveNoBrasilNosUltimosAnos === false)){
        console.log('pode entrar')
    }
    else {
        console.log('não pode entrar')
    }


}

chegarNoAeroporto('brasileiro', true, false) //pode entrar
chegarNoAeroporto('americano', true, false) //pode entrar
chegarNoAeroporto('alemao', false, true) // não pode entrar
chegarNoAeroporto('alemao', false, false) // pode entrar
chegarNoAeroporto('ingles', false, false) // pode entrar
chegarNoAeroporto('ingles', true, false) // não pode entrar
chegarNoAeroporto('africano', false, false) // não pode entrar