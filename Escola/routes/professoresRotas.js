const express = require('express')
const router = express.Router()
const BD = require('../db')


// Listar professores (R - Read)
// Para acessar essa rota digito /professores/
router.get('/', async (req, res) => {
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome_professor'
        const buscaDados = await BD.query(`select p.id_professor, p.nome_professor, p.telefone, p.formacao, d.nome_disciplina
            from professores as p
            left join disciplinas as d on d.id_disciplina = p.id_professor
            where upper(p.nome_professor) like $1 or (p.nome_professor) like $1
            order by ${ordenar}`, ([`%${busca.toUpperCase()}%`]))
        res.render('professoresTelas/lista', {
            vetorDados: buscaDados.rows,
            busca: busca,
            ordenar: ordenar
        })
    } catch (erro) {
    console.log('Erro ao listar professores', erro)
    res.render('professoresTelas/lista', {mensagem: erro})
    }
})

// Rota para abrir tela para criar um novo professor (C - Create)
// Para acessar /professores/novo
router.get('/novo', (req,res) => {
    res.render('professoresTelas/criar')
})

router.post('/novo', async (req,res) => {
    const{ nome_professor, telefone, formacao } = req.body
    await BD.query('insert into professores(nome_professor, telefone, formacao) values($1, $2, $3)', [nome_professor, telefone, formacao])
    res.redirect('/professores')
})

// Excluindo um professor (D - Delete)
router.post('/:id/deletar', async (req,res) => {
    const { id } = req.params
    await BD.query('delete from professores where id_professor = $1', [id])
    res.redirect('/professores')
})

// Editar um professor (U - Update)
// Para acessar /professores/id/editar
router.get('/:id/editar', async (req,res) => {
    const{ id } = req.params
    const resultado = await BD.query('select * from professores where id_professor = $1', [id])
    res.render('professoresTelas/editar', { professor: resultado.rows[0] })
})

router.post('/:id/editar', async (req,res) => {
    const{ id } = req.params
    const { nome_professor, telefone, formacao } = req.body
    await BD.query('update professores set nome_professor = $1, telefone = $2, formacao = $3 where id_professor = $4', [nome_professor, telefone, formacao, id])
    res.redirect('/professores')
})

module.exports = router