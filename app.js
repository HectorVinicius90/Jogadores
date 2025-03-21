// Função para realizar a pesquisa e exibir os resultados
function pesquisar() {
    // Obtém o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
 

    // Inicializa a variável que armazenará os resultados em formato HTML
    let resultados = "";
    
    // Loop que percorre o array de jogadores
    for (let jogador of jogadores) {
        titulo = jogador.titulo.toLowerCase()
        descricao = jogador.descricao.toLowerCase()
        tags = jogador.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${jogador.titulo}</a>
                </h2>
                <p class="descrição-meta">${jogador.descricao}</p>
                <a href=${jogador.link} target="_blank">Mais Informações</a>
            </div>
        `;
        }
        if (!resultados == "") {
            section,innerHTML = "<p>Nada foi encontrado</p>"
            return
        }
        
    }
    
    // Insere o HTML dos resultados na seção de resultados
    section.innerHTML = resultados;
}


