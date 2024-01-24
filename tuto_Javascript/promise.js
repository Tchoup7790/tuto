// promise

let p = new Promise((resolve, reject) => {
    resolve(4)
})

p
    .then((n) => {
        console.log(n)
    })
    .then((n) => console.log('number 2 : ', n))
    .catch((e) => console.log(`error : ${e}`))
    .finally(() => console.log('end promise'))

console.log(p)

function wait (duration) {
    return new Promise( (resolve, reject) => {
        setTimeout((duration) => {
            resolve(duration)
        }, duration)
    })
}

function waitAndFail (duration) {
    return new Promise( (resolve, reject) => {
        setTimeout((duration) => {
            reject(duration)
        }, duration)
    })
}

// wait(2000)
//     .then(() => {
//         console.log('Waiting 2s')
//         return waitAndFail(1000)
//     })
//     .then(() => {
//         console.log('Waiting 1s')
//     })
//     .catch(() => null)


async function main(){
    try{
        await waitAndFail(2000)
        console.log('Hello')
        await wait(2000)
        console.log('World')
    } catch (e){
        console.log('error', e)
    }
}

main()

async function main2(){
    const duration = await wait(500)
    console.log('Duration :', duration)
    return 5
}

main2()
    .then(n => console.log(n))

Promise.all([wait(1000), wait(500)])
    .then(console.log)
    .catch(console.log)

Promise.allSettled([wait(1000), waitAndFail(500)])
    .then(console.log)
    .catch(console.log)