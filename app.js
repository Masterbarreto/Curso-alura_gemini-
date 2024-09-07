import { dadosFilmes } from './dados.js';

// function pesquisa() {
//     console.log('master')
// }

document.querySelector("#botao-pesquisar").addEventListener("click", () => {
    let section = document.getElementById('search-results');

let camopoPesquisa = document.getElementById('search-results')

console.log(camopoPesquisa).value

let Resultados = ''


for (let filme of dadosFilmes) {
    Resultados +=
        `<div class="card">
            <h2>${filme.titulo}</h2>
            <p><strong>Ano:</strong> ${filme.ano}</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <p><strong>Atores:</strong> ${filme.atores.join(', ')}</p>
            <p><strong>Descrição:</strong> ${filme.descricao}</p>
            <p><strong>Plataforma:</strong> ${filme.plataforma}</p>
            <p><strong>Duração:</strong> ${filme.duração} minutos</p>
            <p><strong>Idioma original:</strong> ${filme.idiomaOriginal}</p>
        </div>`
        ;
}

section.innerHTML = Resultados;
})

