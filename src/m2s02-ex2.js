function filtrarAdultos(pessoas) {
    let adultos = pessoas.filter((pessoa) => {
      return pessoa.idade >= 18;
    });
    
    let nomesAdultos = adultos.map((pessoa) => {
        return pessoa.nome;
    });
    
    return nomesAdultos;
    }
    
    
    module.exports = filtrarAdultos;