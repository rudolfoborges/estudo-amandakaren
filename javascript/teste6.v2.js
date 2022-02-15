//sistema de blog
//o blob deve permitir cadastrar usuário
//o usuário do tipo escritor poderá escrever posts no blog
//os usuários normais poderão comentar nos posts
//o blog deve exebir todos os posts com o usuário que postou e quantos comentários ele tem
//dado um post, deve ser possível comentar e visualizar todos os comentários do post
//Nome, Email, Tipo
//texto post e email do usuario que está escrevendo
//se usuário escritor não é possível postar

const usuarios = []
const posts = []

function cadastrarUsuario(usuario){
    usuarios.push(usuario)
}

function escreverPost(textoDoPost, emailEscritor){
    let usuarioEscritor = null
    for(const usuario of usuarios){
        if(usuario.email === emailEscritor){
            usuarioEscritor = usuario
        }
    }

    if(usuarioEscritor.tipo === 'escritor'){
        const post = {
            texto: textoDoPost,
            escritor: usuarioEscritor,
            comentarios: []
        }

        posts.push(post)
        return post
    } else {
        console.log('Você não pode escrever posts')
        return null
    }
}

function exibirPosts(){
    for(post of posts){
        console.log(`Texto: ${post.texto} - Escritor: ${post.escritor.nome} - Comentários: ${post.comentarios.length}`)
    }
}

function comentarPost(textoComantario, usuarioComentario, post) {
    if(post === null){
        console.log('Não é possível comentar nesse post pois ele não existe')
    } else {
        const comentario = {
            texto: textoComantario,
            usuario: usuarioComentario
        }

        post.comentarios.push(comentario)
    }
}

function exbirComentarios(post){
    //Coloquei um FOR diferente aqui
    post.comentarios.forEach(comentario => {
        console.log(`Texto do comantário: ${comentario.texto} - feito por: ${comentario.usuario.nome}`)
    });
}

const thiago = {
    nome: 'Thiago',
    email: 'thiago@gmail.com',
    tipo: 'escritor'
}

const manu = {
    nome: 'Manu',
    email: 'manu@gmail.com',
    tipo: 'normal'
}

cadastrarUsuario(thiago)
cadastrarUsuario(manu)

const post1 = escreverPost('Meu primeiro Post', 'thiago@gmail.com')
const post2 = escreverPost('Meu segundo Post', 'thiago@gmail.com')
const post3 = escreverPost('Post de Manu', 'manu@gmail.com')

comentarPost('Olá Thiago', manu, post1)
comentarPost('Oi Manu!!!', thiago, post1)
comentarPost('Que post legal', manu, post1)
comentarPost('Não gostei desse post', manu, post2)

exibirPosts()
exbirComentarios(post1)
exbirComentarios(post2)