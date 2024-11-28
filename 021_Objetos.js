// Criando os objetos

let produto = {
    nome: 'Iphone',
    modelo: '14',
    valor: 3999.90,
    memoria: 256
}

let aluno = {
    nome: 'Mariana',
    idade: 16,
    rm: '2967',
    numero: 23
}

//Acessando as chaves do objeto 

console.log(produto['nome']);

console.log(produto.nome);           //  Iphone
console.log(produto.modelo);         //  14
console.log(produto['valor'])        //  3999.90
console.log(produto['memoria'])      //  256

const nomeAluno = aluno.nome
const idadeAluno = aluno.idade

let valorProduto = produto.valor
valorProduto = valorProduto * 0.8
console.log(`Produto ${produto.nome} de ${produto.valor} por ${valorProduto}`);

//Alterando propriedades de um objeto
console.log(produto) //{ nome: 'Iphone', modelo: '14', valor: 3999.9, memoria: 256 }
produto.valor = 3890.00
console.log(produto) //{ nome: 'Iphone', modelo: '14', valor: 3890, memoria: 256 }
console.log(produto.valor); //3890

//Adicionar nova propriedade
produto.fabricante = 'Apple'
console.log(produto)

//Iterando sobre as chaves de um objeto
for (let chave in produto){
    console.log(`Na chave ${chave} tem o valor  ${produto[chave]}`);
}

//Objetos aninhados (Um objeto dentro do outro)
let funcionario = {
    nome: 'Reinaldo',
    idade: 30,
    salario: 5000.00,
    filhos: {
        filho1: {nome: 'Jorge', idade: 15},
        filho2: 'Reinaldo Jr'
    }
    
}
console.log(funcionario.filhos.filho1);
console.log(funcionario.filhos.filho1.idade);

aluno = {
    nome: "Mariana",
    idade: 16,
    turma: {
        serie:'2º EM',
        ano: 2024
    },
    mae: {
        nome:"Marcia",
        celular: '18996595481'
    },
    amigos: [
        'Maria', 'Nathalia', 'Vitória'
    ],

    notas: [
        {disciplina: 'Matemática', nota: 10},
        {disciplina: 'Portugues', nota: 9.2},
    ],
}

console.log(aluno.idade);
console.log(aluno.mae.nome);
console.log(aluno.notas);
console.log(aluno.amigos);
console.log(aluno.amigos[0]);
console.log(aluno.notas[0].nota);

// Desestruturação de objetos

let colaborador = {
    nome: "Maurício",
    salario: 5000.00,
    idade: 40,
    setor: 'RH'
}

// Atribuindo dados do objeto a variável da forma comum
let nomeColaborador = colaborador.nome
let salarioColaborador = colaborador["salario"]
let idadeColaborador = colaborador.idade
let setorColaborador= colaborador.set

// Utilizando a desestruturação de objetos 
let{nome,salario,idade,setor} = colaborador

console.log(nome);
console.log(salario);
console.log(idade);
console.log(setor);


console.log(JSON.stringify(colaborador));

// Utilizando o arquivo Json externo
const dadosJson = require('./022_Json.json');
console.log(dadosJson);
console.log(dadosJson.turma);


