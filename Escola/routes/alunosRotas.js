const express = require('express')
const router = express.Router()
const BD = require('../db')


// Listar alunos (R - Read)
// Para acessar essa rota digito /alunos/
router.get("/", async (req, res) => {
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome'
        const pg = req.query.pg || 1 //Obtendo a pág de dados

        const limite = 5 //Números de resgitros por páginas
        const offset = (pg - 1) * limite //Quantidade de registros que quero "pular"

        const buscaDados = await BD.query(`
            select a.nome, a.sexo, t.nome_turma, a.idade, a.sexo, a.cpf, a.email, a.id_aluno
            from alunos a
                inner join turmas_escola as t on a.id_turma = t.id_turma
            where upper(a.nome) like $1 or upper(t.nome_turma) like $1
            order by ${ordenar}`, [`%${busca.toUpperCase()}%`])

        const totalItens = await BD.query(`
            SELECT count(*) as total
            FROM alunos AS a 
            LEFT JOIN turmas_escola AS t ON a.id_turma = t.id_turma
            WHERE upper(a.nome) LIKE $1 OR upper(t.nome_turma) LIKE $1`, [`%${busca.toUpperCase()}%`]) 
        
        const totalPgs = Math.ceil (totalItens.rows[0].total / limite)

        res.render("alunosTelas/lista", { 
                    vetorDados: buscaDados.rows,
                    busca : busca,
                    ordenar: ordenar,
                    pgAtual : parseInt(pg),
                    totalPgs : totalPgs
                })

    } catch ( erro ) {
        console.log('Erro ao listar alunos', erro)
        res.render('alunosTelas/lista', { mensagem : erro, vetorDados: []})
    }
})

// Rota para abrir tela para criar um novo aluno (C - Create)
// Para acessar /alunos/novo
router.get('/novo', (req,res) => {
    res.render('alunosTelas/criar')
})

router.post('/novo', async (req,res) => {
    const{ nome_aluno, idade, email, sexo, cpf } = req.body
    await BD.query('insert into alunos(nome, idade, email, sexo, cpf) values($1, $2, $3, $4, $5)', [nome_aluno, idade, email, sexo, cpf])
    res.redirect('/alunos')
})

// Excluindo um aluno (D - Delete)
router.post('/:id/deletar', async (req,res) => {
    const { id } = req.params
    await BD.query('delete from alunos where id_aluno = $1', [id])
    res.redirect('/alunos')
})

// Editar um aluno (U - Update)
// Para acessar /alunos/id/editar
router.get('/:id/editar', async (req,res) => {
    const{ id } = req.params
    const resultado = 
    await BD.query('select * from alunos where id_aluno = $1', [id])

    const turmasCadastradas = 
            await BD.query('select * from turmas_escola order by nome_turma')

    const disciplinasCadastradas = 
    await BD.query('select * from disciplinas order by nome_disciplina')

    const notas = await BD.query(`
    select d.nome_disciplina, ad.media, ad.nr_faltas, ad.status
    from disciplinas as d 
        inner join aluno_disciplina as ad on d.id_disciplina = ad.id_disciplina
    where ad.id_aluno = $1 
        `, [id])
    
    res.render('alunosTelas/editar', { 
        aluno: resultado.rows[0],
        turmasCadastradas: turmasCadastradas.rows,
        disciplinasCadastradas: disciplinasCadastradas.rows,
        notas: notas.rows
    })
})

router.post('/:id/editar', async (req,res) => {
    const{ id } = req.params
    const { nome, idade, email, sexo, cpf } = req.body
    await BD.query('update alunos set nome = $1, idade = $2, email = $3, sexo = $4, cpf = $5 where id_aluno = $6', [nome, idade, email, sexo, cpf, id])
    res.redirect('/alunos')
})

// Criando rota para lançar uma nota
router.post('/:id/lancar-nota', async (req,res) => {
    const{ id } = req.params
    const { media, faltas, id_disciplina } = req.body
    await BD.query(` insert into aluno_disciplina
                    (id_disciplina, id_aluno, media, nr_faltas) values
                    ($1, $2, $3, $4)
        `, [id_disciplina, id, media, faltas])
    
        res.redirect(`/alunos/${id}/editar`)
})

module.exports = router