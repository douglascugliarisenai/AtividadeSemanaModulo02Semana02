function compor(f, g) {
    return function (x) {
        return f(g(x));
    }
}

module.exports = compor;