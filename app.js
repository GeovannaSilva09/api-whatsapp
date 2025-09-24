/*********************************************************************************
 * Objetivo: API responsável em criar endPoints referentes a 
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

const app = express()

app.use((request, response, next) => {
    response.header('acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})