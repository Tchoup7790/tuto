const compteur = document.querySelector("#compteur") as HTMLButtonElement
let i = 0

const increment = (e : Event) =>{
    e.preventDefault()
    i++
    compteur.querySelector('span').innerText = i.toString()
}

function printId(id :string | number){
    if(typeof id === 'number'){
        console.log((id *3).toString)
    }else{
        console.log(id.toUpperCase())
    }
}

compteur.addEventListener('click', increment)


type User = {firstname: string, lastname: string}

const john : User = {firstname: "John", lastname: "Doe"}
console.log(john)

class A{
    public b = 4
    protected c = 5
    
    constructor(aParam : string){
        const a :string = aParam
    }

    log(){
        console.log(this.a)
        console.log(this.b)
        console.log(this.c)
    }
}

interface Point {
    x: number,
    y: number
}

const aInstance = new A("hello world")
aInstance.log();
