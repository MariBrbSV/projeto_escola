const express = require('express')
const router = express.Router()
const BD = require('../db')


// Definindo rota da tela de login 
// Entra por: /auth/login
router.get('/login', (req,res) => {
    res.render('admin/login')
})

// Processando o login do usuário 
router.post('/login', async (req,res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha

    const buscaDados = await BD.query (`
        Select * from usuarios
        where usuario = $1 and senha = $2
        `, [usuario, senha])
    
    // Verifica se o login e a senha são válidos (se encontrou na tabela do BD)
    if (buscaDados.rows.length > 0) {
        req.session.usuarioLogado = buscaDados.rows[0].usuario
        req.session.nomeUsuario = buscaDados.rows[0].nome
        console.log(req.session.nomeUsuario);
        
        req.session.idUsuario = buscaDados.rows[0].id_usuario
        res.redirect('/admin/')
    } else {
        res.render('admin/login', {mensagem: 'Usuário não autenticado'})
    }
})

// Criando rota para logout (sair do sistema)
router.get('/logout', (req,res) => {
    req.session.destroy( () => {
        res.redirect('/auth/login')
    })
})

module.exports = router