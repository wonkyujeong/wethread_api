// serverWithExrpess.js
const http = require('http')
const express = require('express')
const { sendProducts } = require('./sendProducts')
const { createUser } = require('./user')
const { Bulletin } = require("./user")
const { list } = require("./user")

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
    res.json({ message: '/ pong' })
})

app.post('/signup', createUser)
app.post("/post",Bulletin)
app.get("/list", list)


const server = http.createServer(app)

server.listen(8000, () => {
    console.log('server is listening on PORT 8000')
})