const appDataSource = require("./db")
const dotenv = require('dotenv')
dotenv .config()

const http = require('http')
const express = require('express')


const {signup} = require('./services/appServices')
const {createPost} = require("./services/postServices")
const {allgetPosts} = require("./services/postServices")
const {usersPosts} = require("./services/postServices")
const {updata} = require("./services/postServices")
const {Delete} = require("./services/postServices")
const {likes} = require("./services/postServices")

const app = express()

app.use(express.json())



app.post("/users/sign-up",signup)
app.post("/posts", createPost)
app.get("/allgetpost",allgetPosts)
app.get("/users/Posts",usersPosts)
app.patch("/users/updata",updata)
app.delete("/users/delete",Delete)
app.post("/users/likes"/likes)

const server =http.createServer(app)

const start = async () => { 
    try {
        server.listen(8000, () => console.log('server is listening on 8000'))
    
        appDataSource.initialize().then(() => {
            console.log("Data Source has been initialized")
        })
    
    }catch(err) {
        console.error(err)
    }
}

start()
