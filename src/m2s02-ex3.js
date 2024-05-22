function agruparPorCategoria(produtos) {
    let agrupados = produtos.reduce((acumulador, produto) => {
        let { categoria, preco } = produto;
        acumulador[categoria] = (acumulador[categoria] || 0) + preco;

        return acumulador;
    }, {});
    return agrupados;
}

module.exports = agruparPorCategoria;
