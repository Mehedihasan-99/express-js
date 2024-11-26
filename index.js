const express = require('express')
const app = express()
const port = 5000

app.get( "/", (req, res) => {
    res.send("hello world form bangladesh")
})

app.get( "/data", (req, res) => {
    res.send("This is data")
} )

app.listen(port, () => {
    console.log(`hello world running port is ${port}`)
})