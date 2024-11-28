const express = require('express')
const router = express.Router()
const BD = require('../db')

// Listar turmas (R - Read)
router.get('/', async (req, res) => {
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome_turma'
        const buscaDados = await BD.query(`select t.id_turma, t.nome_turma
            from turmas_escola as t
            where upper(t.nome_turma) like $1
            order by ${ordenar}`, ([`%${busca.toUpperCase()}%`]))
        res.render('turmas/lista', {
            vetorDados: buscaDados.rows,
            busca: busca,
            ordenar: ordenar
        })
    } catch (erro) {
    console.log('Erro ao listar turmas', erro)
    res.render('turmas/lista', {mensagem: erro})
    }
})

// Rota para criar uma nova turma (C - Create)
router.get('/novo', (req,res) => {
    res.render('turmas/criar')
})

router.post('/novo', async (req,res) => {
    const{ nome_turma } = req.body
    await BD.query('insert into turmas_escola(nome_turma) values($1)', [nome_turma])
    res.redirect('/turmas')
})

// Excluindo uma turma (D - Delete)
router.post('/:id/deletar', async (req,res) => {
    const { id } = req.params
    await BD.query('delete from turmas_escola where id_turma = $1', [id])
    res.redirect('/turmas')
})

// Editar uma turma (U - Update)
// Para acessar /turmas/id/editar
router.get('/:id/editar', async (req,res) => {
    const{ id } = req.params
    const resultado = await BD.query('select * from turmas_escola where id_turma = $1', [id])
    res.render('turmas/editar', { turma: resultado.rows[0] })
})

router.post('/:id/editar', async (req,res) => {
    const{ id } = req.params
    const { nome_turma } = req.body
    await BD.query('update turmas_escola set nome_turma = $1 where id_turma = $2', [nome_turma, id])
    res.redirect('/turmas')
})

module.exports = router
