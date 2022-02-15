//criar um array de produtos e incluir 3 produtos identicos
//criar uma função que permita vendar os produtos desse array
//só é permetido vender a quantidade de produtos que existe no array
//se tentar comprar um produto que não exista mais no array então mandar uma mensagem
//acabou o estoque
//mas, se o comprador for ladrão não posso vender

const produtos = ['carro', 'carro', 'carro', 'carro']

function venderproduto(tipo){
    if(produtos.length === 0) 
    {
        console.log('Acabo')
    }
    else if(tipo === 'ladrao')
    {
      console.log('não vender')
    }
    else {
        console.log('ok')
         produtos.pop()
    }


}
venderproduto()
venderproduto('ladrao')
venderproduto()
venderproduto('ladrao')
venderproduto()
venderproduto()
venderproduto()
venderproduto()