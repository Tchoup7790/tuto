// usual function
const array = [12, 18, 293, 92]

console.log(array.at(1))
console.log(array.at(-1))

const array_filter = array.filter((elt) => elt > 100)
console.log(array_filter)

const array_find = array.find((elt) => elt > 10)
console.log(array_find)

console.log(Array.from('test'))

console.log(array_filter.includes(293))
console.log(array.join('-'))

const array_map = array.map(x => x * 2)
console.log(array_map)

console.log(array.reduce((acc, elt) => acc+elt, 0))

console.log(array.slice(2))
console.log(array.slice().reverse())
