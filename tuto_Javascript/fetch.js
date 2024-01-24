//fetch

async function fetchUsers () {
    const r = await fetch('https://jsonplaceholder.typicode.com/users/?_limit=5', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type" : "application/json"
        },
    })
    if (r.ok === true){
        return r.json()
    }else{
        throw new Error('no response from server')
    }
}

// fetchUsers().then(users => console.log(users))

async function fetchPostsPost () {
    const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({title: "Mon premier article"})
    })
    if (r.ok === true){
        return r.json()
    }else{
        throw new Error('no response from server')
    }
}

// fetchPostsPost().then(posts => console.log(posts))

const a = new AbortController()
Promise.race([
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=5&_delay=5000', {
        signal: a.signal
    }),
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=3000', {
        signal: a.signal
    })
]).then(r=> r.json()).then(body => {
    a.abort()
    console.log(body)
})
