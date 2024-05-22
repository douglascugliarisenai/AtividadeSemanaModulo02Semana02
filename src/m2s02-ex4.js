function contador() {
    let i = 0;
    function proximo() {
        i++;
        return i;
    }
    return proximo
}

module.exports = contador;