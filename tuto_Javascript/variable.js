//variable
    const a = 4.34
    console.log(a)

    const b = "hello"
    const c = "world"
    console.log(b+c)
    console.log(b+' '+c)
    console.log(`${b} ${c}`)

    const bool = true
    console.log(bool)
    const nnull = null
    console.log(nnull)
    let undef
    console.log(undef)

    const array = [1, 2, 3, 'test', [3, 2, 1]]
    console.log(array)
    console.log(array[4][2])

    const dico = {
        firstname: 'John',
        lastname: 'doe',
        task : [1, 2, 3, 'test', [3, 2, 1]],
        dicoTask : {
            name : 'test',
            age : 12
        },
        "hell o" : 12,
        [c] : 3
    }
    console.log(dico)
    console.log(dico.lastname)
    console.log(dico['lastname'])
    console.log(dico.task[2])
    console.log(dico.dicoTask.name)
    console.log(dico["hell o"])
    console.log(dico[c])

    console.log(typeof(a))
    console.log(typeof(b))
    console.log(typeof(array))
    console.log(typeof(dico))

    console.log(4 + 3)
    console.log(4 + '3')
    console.log(4 * 3)
    console.log(4 * '3')
    console.log(4 * 'a')

    const e = array
    console.log(e[0])
    array[0] = 2
    console.log(e[0])