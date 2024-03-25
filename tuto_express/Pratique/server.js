import express from 'express'

const app = express()

app.get("/", (req, res) => {
    console.log("loading home page")
    res.render("/index")
})

app.listen(8080)