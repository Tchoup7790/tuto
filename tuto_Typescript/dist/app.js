const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    compteur.querySelector('span').innerText = i.toString();
};
function printId(id) {
    if (typeof id === 'number') {
        console.log((id * 3).toString);
    }
    else {
        console.log(id.toUpperCase());
    }
}
compteur.addEventListener('click', increment);
const john = { firstname: "John", lastname: "Doe" };
console.log(john);
class A {
    constructor() {
        this.a = 3;
        this.b = 4;
        this.c = 5;
    }
    log() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
const aInstance = new A();
aInstance.log();
