// timer
function wait(duration){
    const t = Date.now()
    while (Date.now() -t < duration){}
}

console.log('Hello')
// wait(1000)
console.log('World!')


const t = setInterval(() => {
    console.log(('everybody'))
}, 1000)

setTimeout(() => {
    clearTimeout(t)
}, 10000)