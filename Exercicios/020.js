// Criando os objetos

let serie = {
    nome: "Gilmore Girls",
    diretor: "Amy Sherman-Palladino",
    gênero: [
        'Família','Comédia','Família'
    ],
    ano_lançamento: 2000,
    n_temporadas: 7,
    episodios: [
        {temporada: 2, n_ep: 3, titulo: 'Red light on the wedding night', duração: '45 minutos'},
        {temporada: 7, n_ep: 7, titulo: 'French Twist', duração: '40 minutos'},
        {temporada: 5, n_ep: 8, titulo: 'The Partys over', duração: '35 minutos'},
    ]
}


console.log(serie.nome);
console.log(serie.diretor);
console.log(serie.gênero[0]);
console.log(serie.gênero[1]);
console.log(serie.gênero[3]);
console.log(serie.ano_lançamento);
console.log(serie.n_temporadas);

console.log(serie.episodios[0].temporada);
console.log(serie.episodios[0].titulo);
console.log(serie.episodios[0].n_ep);
console.log(serie.episodios[0].duração);

console.log(serie.episodios[1].temporada);
console.log(serie.episodios[1].titulo);
console.log(serie.episodios[1].n_ep);
console.log(serie.episodios[1].duração);

console.log(serie.episodios[2].temporada);
console.log(serie.episodios[2].titulo);
console.log(serie.episodios[2].n_ep);
console.log(serie.episodios[2].duração);
