/*********************************************************************************
 * Objetivo: API responsável em criar endPoints referentes as Conversas e Usuários
 * Data: 24/09/2025     
 * Autora: Geovanna
 * Versão: 1.0
 * 
 * Dependências para criar a API:
 *     express      - npm install express       --save Instala as dependencias para criar uma API
 *     cors         - npm install cors          --save Instala as dependencias para configurar as permissões de uma API
 *     body-parser   - npm install body-parser  --save Instala as dependencias para receber os tipos de dados via POST ou PUT
 *********************************************************************************/


const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const dados = require('./modulo/funcoes.js')

//Define a porta padrão da API, se for em um servidor de nuvem não tem acesso a porta
            // em execução podemos definir uma porta livre
const PORT          = process.PORT || 8080

const app = express()

app.use((request, response, next) => {
    response.header('acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

// Request -> Recebe os dados da API
// Response -> Envia os dados na API


//EndPoint para listar todos os dados dos usuários
app.get('/v1/whatsapp/users', function (request, response) {
    let dadosUsuarios =  dados.getAllUsersDados()
    response.status(dadosUsuarios.statuscode)
    response.json(dadosUsuarios)

})

//EndPoint para listar os dados do perfil do usuário
app.get('/v1/whatsapp/profile/:numero', function (request, response) {
    let numero = request.params.numero              
    let dadosPerfil = dados.getProfileDados(numero)
    response.status(dadosPerfil.statuscode)
    response.json(dadosPerfil)

})

//EndPoint para listar os contatos do usuário
app.get('/v1/whatsapp/contacts/:numero', function (request, response) {
    let numero = request.params.numero              
    let dadosContatos =  dados.getContatosByUser(numero)
    response.status(dadosContatos.statuscode)
    response.json(dadosContatos)

})  

//EndPoint para listar o chat de um contato do usuário      
app.get('/v1/whatsapp/chat/:numero/:contato', function (request, response) {
    let numero = request.params.numero              
    let contato = request.params.contato        
    let dadosChat = dados.getContactChat(numero, contato)     
    response.status(dadosChat.statuscode)       
    response.json(dadosChat)
   
})  

//EndPoint para listar todas as conversas de um usuário      
app.get('/v1/whatsapp/chat/:numero', function (request, response) {
    let numero = request.params.numero                 
    let dadosConversas = dados.getAllMessagesByUser(numero)     
    response.status(dadosConversas.statuscode)       
    response.json(dadosConversas)
   
})  

//EndPoint para listar o chat de um contato do usuário filtrando por uma palavra chave
app.get('/v1/whatsapp/chat/:numero/:contato/:keyword', /*cors(), async*/ function (request, response  /*, next*/) {
    let numero = request.query.numero                  
    let contato = request.query.contato                            
    let keyword = request.query.keyword                    
    let dadosChat = /*await*/ dados.filterByKeyWord(numero, contato, keyword)     
    response.status(dadosChat.statuscode)       
    response.json(dadosChat)
    /*next()*/
})  

app.listen(PORT, function () {
    console.log('Servidor aguardando requisições na porta ' + PORT)
})                                                  













