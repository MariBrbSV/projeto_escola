const express = require ('express')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')

const app = express()

// Configurações 
// Configura o motor de templates para EJS
app.set('view engine', 'ejs')
// Configura a pasta para arquivos estáticos (css / img)
app.use(express.static('public'))
// Definir que iremos utilizar um layout padrão
app.use(expressLayouts)
app.set('layout', 'layouts/principal')
// Para processar os dados do formulário configuramos:
app.use(express.urlencoded({extended: true}))


// Rota principal do site
app.get('/', (req,res) => {
    // Renderiza (Carrega) o arquivo .ejs
    res.render('index')
})

app.get('/sobre', (req,res) => {
    res.render('sobre')
})

app.post('/calcular_juros_simples', (req,res) => {
    console.log('Entrou no calcular')
    res.render('index')
})

// Rota para exibir a tela do juros simples
app.get('/juros_simples', (req, res) => {
    res.render('juros_simples')
})

// Rota para exibir a tela do juros compostos
app.get('/juros_compostos', (req,res) => {
    res.render('juros_compostos')
})

// Método POST do juros simples, para realizar o cálculo
app.post('/juros_simples', (req, res) => {
    // Obtendo os valores digitados na tela de juros simples
    const c = parseFloat(req.body.capital)
    const i = parseFloat(req.body.taxa)
    const t = parseFloat(req.body.tempo)   

    const j = c * (i / 100) * t 
    const total = c + j
    console.log(total);
    // Renderizando a tela com os dados calculados
    res.render('juros_simples', { total,j, c, t, i } )
    
})

//Método post do juros compostos, para realizar o cálculo
app.post('/juros_compostos', (req,res) => {
    const c = parseFloat(req.body.capital)
    const i = parseFloat(req.body.taxa)
    const t = parseFloat(req.body.tempo) 

    const r = c * ((1+(i / 100))** t)
    const j = r - c
    console.log(r);
    res.render('juros_compostos', {r,j,c,i,t})
})



const porta = 3000 //Porta onde o servidor vai rodar  
app.listen(porta, () => {
    console.log(`Servidor rodado em http://localhost:${porta}`)
})
