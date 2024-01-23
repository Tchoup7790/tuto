 // functions
    function saluer (nom) {
    return "Salut " + nom
}
    saluer('Marc')

    const demo = function (nom = 'John') {
    return "Salut " + nom
}
    demo()

    function maFonction () {
    console.log(this)
}

    maFonction.call(3)
    maFonction.call(4)

    const a = {
    prop: 42,
    func: function() {
    return this.prop;
},
};

    console.log(a.func())

    // const hello = (name) => {
    //     console.log(`Bonjour ${name}`)
    // }

    const hello = () => {
    console.log(this)
}
    hello()
    hello.call(3)

    // const double = (n) => {
    //     return 2 * n
    // }
    // const double = (n) => 2 * n
    const double = n => 2 * n

