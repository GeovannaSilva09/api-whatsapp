/*********************************************************************************
 * Objetivo: Arquivo responsável pelas funções para criar a API
 * Data: 24/09/2025     
 * Autora: Geovanna
 * Versão: 1.0
 *********************************************************************************/

const dados = require('./contatos')
const MESSAGE_ERROR = { status: false, statuscode: 500, development: 'Geovanna Silva de Sousa' }

//Retorna todos os dados dos usuários independente do número
const getAllUsersDados = function () {
    let message = { status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', informaçoes_dos_usuarios: '' }

    const showAll = dados['whats-users'].forEach(function (item) {

    })



}

//Lista todos os dados do perfil do usuário
const getAllprofileDados = function () { }

//Lista dados de contato para cada usuário
const getContatosByUser = function(){
    let message = {status: true, statuscode: 200, development: 'Geovanna Silva de Sousa', contatos: []}

    const contatosUsuario = dados['whats-users'].forEach(function(usuario){
       
        usuario.contacts.forEach(function(infoUsuario){
            message.contatos.push({
                name: infoUsuario.name,
                number: infoUsuario.number,
                description: infoUsuario.description
             
            })
        })
    })

    if(message.contatos.length > 0){
        return message
    } else{
        return MESSAGE_ERROR
    }


}

console.log(getContatosByUser('Ana Maria'))



//Lista todas as mensagens trocadas de uma conta de usuário
const getAllMensagens = function () { }

    //Lista uma conversa de um usuário e um contato


    module.exports = {
        getContatosByUser
    }

/*"name": "Jane Smith",
"number": "269999799601",
"description": "UI Designer",
"profile-image": "269999799601.png",*/