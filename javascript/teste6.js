//sistema de blog
//o blob deve permitir cadastrar usuário
//o usuário do tipo escritor poderá escrever posts no blog
//os usuários normais poderão comentar nos posts
//o blog deve exebir todos os posts com o usuário que postou e quantos comentários ele tem
//dado um post, deve ser possível comentar e visualizar todos os comentários do post
//Nome, Email, Tipo
//texto post e email do usuario que está escrevendo
//se usuário escritor não é possível postar

class Usuario {
    constructor(nome, email, tipo){
        this.nome = nome
        this.email = email
        this.tipo = tipo
    }
}

const thiago = new Usuario('Thiago', 'thiago@gmail.com', 'escritor')
const manu = new Usuario('Manu', 'manu@gmail.com', 'normal')

class Comentatio {
    constructor(textoDoComentario, usuarioQueComentou){
        this.texto = textoDoComentario
        this.usuario = usuarioQueComentou
    }
}
class Post {
    constructor(texto, escritor){
        this.texto = texto
        this.escritor = escritor
        this.comentarios = []
    }

    comentarNoPost(textoDoComentatio, usuario){
        const comentario = new Comentatio(textoDoComentatio, usuario)
        this.comentarios.push(comentario)
    }

    quantidadeDeComentarios(){
        const quantidade = this.comentarios.length
        return quantidade
    }

    exibirComentarios(){
        for(const comentario of this.comentarios){
            console.log(`Texto: ${comentario.texto} - ${comentario.usuario.nome}`)
        }
    }
}
class Blog {
    constructor(nome){
        this.nome = nome
        this.usuarios = []
        this.posts = []
    }

    cadastrarUsuario(usuario){
        this.usuarios.push(usuario)
    }

    escreverPost(texto, emailDoUsuarioEscritor){
        let usuarioEscritor = null
        for(const usuario of this.usuarios){
            if(usuario.email === emailDoUsuarioEscritor){
                usuarioEscritor = usuario
            }
        }

        if(usuarioEscritor.tipo === 'escritor'){
            const post = new Post(texto, usuarioEscritor)
            this.posts.push(post)
            return post
        } else {
            console.log(`${usuarioEscritor.nome} não é escritor(a)`)
        }
    }

    exibirPosts(){
        for(const post of this.posts){
            console.log(`${post.texto} - Escrito por: ${post.escritor.nome} - Quantidade de Comantários:${post.quantidadeDeComentarios()}`)
        }
    }

    exibirTodosOsComentarios() {
        for(const post of this.posts){
            post.exibirComentarios()
        }
    }
}

const blogRBTech = new Blog('RB Tech')

blogRBTech.cadastrarUsuario(thiago)
blogRBTech.cadastrarUsuario(manu)

const post1 = blogRBTech.escreverPost('meu primeiro post', 'thiago@gmail.com')
const post3 = blogRBTech.escreverPost('O post manu', 'manu@gmail.com')
const post2 = blogRBTech.escreverPost('Meu segundo post', 'thiago@gmail.com')

post1.comentarNoPost('Comatário do post 1', manu)
post1.comentarNoPost('Olá manu!!!', thiago)
post1.comentarNoPost('Oi thiago', manu)

post2.comentarNoPost('Não gostei desse post', manu)

blogRBTech.exibirPosts()
blogRBTech.exibirTodosOsComentarios()
