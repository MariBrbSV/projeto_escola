const express = require('express')
const app = express ()

// Lista de Alunos
const alunos = ['Mauro', 'Alice', 'Patrícia', 'Roger']

// Rota GET raiz (principal)
app.get('/', (req, res) => {
    res.send ('Bem-vindo ao servidor Node.JS!!!')
})

app.get('/sobre', (req, res) => {
    res.send('Esta é a página sobre o projeto')
})

app.get('/contato', (req,res) => {
    res.send('Aqui você consegue entrar em contato com a empresa')
})

app.get('/alunos', (req, res) => {
    let html = '<ul>'
    for (let alunoSel of alunos) {
        html = html + `<li style='color:blue'> ${alunoSel} </li>`
    }

    html = html + '</ul>'

    res.send(html)

})

app.get('/aluno/:id', (req, res) => {
    const id = req.params.id
    const alunoSel = alunos[id]
    if (alunoSel == undefined) {
        res.send(`Aluno na posição ${id} não encontrado`)
    } else {
    res.send(`Você está visualizando o perfil de ${alunoSel}`)
    }
})

app.get('/media/:id/:nota1/:nota2', (req, res) => {
    const id= req.params.id
    const nota1 = req.params.nota1
    const nota2 = req.params.nota2

    const alunoSel = alunos[id]
    const media = ( parseFloat (nota1) + parseFloat (nota2)) / 2
    res.send(`O aluno ${alunoSel} tirou as notas ${nota1} e ${nota2} sua média foi de ${media.toFixed(1)}`)

})

app.get('/menu', (req,res) => {
    let html = `
    <h1> Menu </h1>
    <a href='/'>Principal</a> <br>
    <a href='/sobre'>Sobre</a> <br>
    <a href='/contato'>Contato</a> <br>
    <a href='/alunos'>Alunos</a> <br>
    <a href='/aluno/2'>Aluno 2</a> <br>
    <a href='/aluno/50'>Aluno inválido</a> <br>
    <a href='/media/1/8/10'>Média</a> <br>
    `

    res.send(html)
})

const porta = 3000  // Porta onde o servidor vai rodar
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

