function calcularProduto(numeros) {
    let produto = numeros.reduce((acumulador, numero) => {
        return acumulador * numero;
    })
    return produto;
}

module.exports = calcularProduto;