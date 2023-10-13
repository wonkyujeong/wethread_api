const dotenv = require('dotenv')

dotenv .config()

const {DataSource} = require("typeorm")

const appDataSource = new DataSource({
    type: process.env.typeorm_connection,
    host: process.env.typeorm_host,
    port: process.env.typeorm_port,
    username: process.env.typeorm_username,
    password: process.env.typeorm_password,
    database: process.env.typeorm_database
})

appDataSource.initialize().then(() => {
    console.log("Data Source has been initialized")
})

module.exports =  appDataSource 