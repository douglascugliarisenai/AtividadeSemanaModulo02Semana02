function pegarNumerosPares(numeros){
    let pares = numeros.filter((numero) => {
        return numero % 2 === 0
    })

    return pares;
}

module.exports = pegarNumerosPares;