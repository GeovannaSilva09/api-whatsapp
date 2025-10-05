/*********************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar a API
 * Data: 24/09/2025     
 * Autora: Geovanna
 * Versão: 1.0
 *********************************************************************************/

const contatos = require('./contatos')
const dados = require('./contatos')
const MESSAGE_ERROR = { status: false, statuscode: 500, development: 'Geovanna Silva de Sousa' }

//Retorna todos os dados dos usuários independente do número
const getAllUsersDados = function () {
    let message = { status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', informaçoes_dos_usuarios: [] }

    dados['whats-users'].forEach(function (usuario) {

        message.informaçoes_dos_usuarios.push({
            id: usuario.id,
            account: usuario.account,
            nickname: usuario.nickname,
            created_since: usuario['created-since'],
            profile_image: usuario['profile-image'],
            number: usuario.number,
            background: usuario.background

        })
        usuario.contacts.forEach(function (infoUsuario) {
            message.informaçoes_dos_usuarios.push
                ({
                    name: infoUsuario.name,
                    number: infoUsuario.number,
                    description: infoUsuario.description,
                    image: infoUsuario.image

                })
        })
    })

    if (message.informaçoes_dos_usuarios.length > 0) {
        return message
    } else {
        return MESSAGE_ERROR
    }

}
//console.log(getAllUsersDados())


// Lista todos os dados do perfil do usuário
const getProfileDados = function (numero) {
    let message = { status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', dados_do_perfil: [] }

    dados['whats-users'].forEach(function (perfil) {
        message.dados_do_perfil.push({
            account: perfil.account,
            nickname: perfil.nickname,
            created_since: perfil['created-since'],
            profileImage: perfil['profile-image'],
            number: perfil.number,
            background: perfil.background,
        })
    })
    if (message.dados_do_perfil.length > 0)
        return message
    else
        return MESSAGE_ERROR
}
//console.log(getProfileDados())



//Lista dados de contato para cada usuário
const getContatosByUser = (numero) => {
    let usuario = dados["whats-users"].find(usuario => usuario.number === numero)

    if (!usuario) {
        return MESSAGE_ERROR
    }

    let info = [{ Perfil: usuario.account }]

    usuario.contacts.forEach(contatos => {
        info.push({
            name: contatos.name,
            image: contatos.image,
            number: contatos.number,
            description: contatos.description
        })
    })

    return {
        status: true,
        statuscode: 200,
        development: 'Geovanna Silva de Sousa',
        info
    }
}
//console.log(getContatosByUser("11987876567"))



//Lista todas as mensagens trocadas de uma conta de usuário
const getAllMessagesByUser = (numero) => {
    let usuario = dados["whats-users"].find(usuario => usuario.number === numero)

    if (!usuario) {
        return MESSAGE_ERROR

    }

    let info = [{ perfil: usuario.account }]
    usuario.contacts.forEach(contatos => {
        info.push({
            name: contatos.name,
            image: contatos.image,
            number: contatos.number,
            messages: contatos.messages
        })
    })

    return {
        status: true,
        statuscode: 200,
        development: 'Geovanna Silva de Sousa',
        info
    }

}
//console.log(getAllMessagesByUser("11987876567"))


//Lista uma conversa de um usuário e um contato
const getContactChat = function (numero, numeroContato) {

    let usuario = dados["whats-users"].find(usuario => usuario.number === numero)

    if (!usuario) {
        return MESSAGE_ERROR
    }

    let contato = usuario.contacts.find(contato => contato.number === numeroContato)

    return {
        status: true,
        statuscode: 200,
        development: 'Geovanna Silva de Sousa',

        info: [
            { perfil: usuario.account },
            {
                name: contato.name,
                image: contato.image,
                number: contato.number,
                messages: contato.messages
            }
        ]
    }
}
/*console.log(
    JSON.stringify(getContactChat("11987876567", "26999999963"), null, 2)
)*/

const filterByKeyWord = (numero, numeroContato, keyword) => {
    let usuario = dados["whats-users"].find(usuario => usuario.number === numero)
    if (!usuario) return MESSAGE_ERROR

    let contato = usuario.contacts.find(contato => contato.number === numeroContato)
    if (!contato) return MESSAGE_ERROR


    let mensagemFiltrada = contato.messages.filter(mensagem =>
    mensagem.content && mensagem.content.toLowerCase().includes(keyword.toLowerCase()))


    return {
        status: true,
        statuscode: 200,
        development: 'Geovanna Silva de Sousa',

        info: [
            { perfil: usuario.account },
            {
                name: contato.name,
                image: contato.image,
                number: contato.number,
                messages: mensagemFiltrada
            }]

    }
}

console.log(
    JSON.stringify(filterByKeyWord("11987876567", "26999999964", 'FINE'), null, 2))

module.exports = {
    getAllUsersDados,
    getContatosByUser,
    getProfileDados,
    getAllMessagesByUser,
    getContactChat
}

