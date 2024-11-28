const express = require('express')
const app = express()

// Lista de produtos
const produtos = ['Notebook', 'Mouse', 'Teclado','Fone de Ouvido', 'Caixa de som']

// Index principal (Colocar boas vindas)
app.get('/', (req,res) => {
    res.send ('Bem vindo ao nosso servidor! 🎉 É sempre bom ter você aqui conosco!')
})

app.get('/produtos', (req,res) => {
    let html = '<ul>'
    for (let produtoSel of produtos) {
        html = html + `<li style='color:blue'> ${produtoSel} </li>`
    }

    html = html + '</ul>'

    res.send(html)
})

app.get('/produtos/:id', (req,res) => {
    const id = req.params.id
    const produtoSel = produtos[id]
    if (produtoSel == undefined) {
        res.send(`Produto não encontrado`)
    } else {
        res.send(`Você está visualizando o produto: ${produtoSel}`)
    }
}) 

app.get('/total/:id/:preco/:qtde:', (req,res) => {
    const id = req.params.id
    const preco = req.params.preco
    const qtde = req.params.qtde

    const produtoSel = produtos[id]
    const total = (parseFloat(preco) * parseFloat(qtde))
    res.send(`Você selecionou ${qtde} produtos, que ficaram no total de ${total}`)
})

app.get('/index', (req,res) => {
    let html = `
    <h3> Menu </h3>
    <a href='/'> Principal</a> <br>
    <a href='/produtos'> Produtos </a> <br>
    <a href='/preco'> Preço </a> <br>
    <a href='/total'> Total </a> <br>
    <a href='/produto/secador'> Produto Inválido </a> <br>
    
    `
    res.send(html)
})


const porta = 3000  // Porta onde o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})