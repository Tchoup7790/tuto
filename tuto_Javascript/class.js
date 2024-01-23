class Student {
    school = "test"
    #private = 'Private Attribut'

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    canPass () {
        let sum = 0
        this._notes.forEach((num) => { sum += num })
        return Student.moyenne <=(sum / this._notes. length)
    }

    set notes (v){
        if (Array.isArray(v)){
            this._notes = v
        }
    }

    get name (){
        return `I'm ${this.lastname} ${this.firstname}`
    }

    static moyenne = 10

    static hello () {
        return 'hello world'
    }
}

class SuperStudent extends Student{

    get name (){
        return `Super `+super.name
    }

    canPass() {
        return true
    }
}

console.log(Student)
console.log(typeof Student)

const john = new SuperStudent('John', 'Doe')
console.log(john)

const jane = new Student('Jane', 'Doe')
console.log(jane)

john.notes = [12, 1, 9]
jane.notes = [12, 1, 9]
console.log(john)
console.log(john.canPass(), jane.canPass())

console.log(jane.name)
console.log(john.name)

console.log(john.#private)
