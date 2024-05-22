function transformarArray(array, transformacao) {
    numeros = array.map((numero) => {
        return transformacao(numero);
    })
    return numeros;
}

module.exports = transformarArray;