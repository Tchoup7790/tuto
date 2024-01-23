//syntactic suger
i = 1
console.log(i++)

i+=1
console.log(i)

const double = n => n*2
console.log(double(i))

const person = {firstname : 'john'}
console.log(person.name?.toString())
console.log(person.firstname)

const array = [13, 312, 432, 3, 324]

const [one, ...lastArray] = array
console.log(one, lastArray)

console.log([...array, 2, 3, 1])
console.log([...array].reverse())

console.log(i)
console.log(i >= 5 ? 'i >= 5' : 'i < 5')