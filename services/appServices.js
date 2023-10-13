const appDataSource = require("../db")

//회원가입
const signup = async(req,res) => {
    console.log(req.body)
    const userName = req.body.nickname
    const userEmail = req.body.email
    const userPassword = req.body.password
    
    
    const userData = await appDataSource.query(`
    insert into users(
        nickname,
        email,
        password
    )
    values(
        '${userName}',
        '${userEmail}',
        '${userPassword}'
    )
    `)
    console.log('typeorm return data:' , userData)

    return res.status(201).json({"message":"signup_success"})
}

module.exports = {signup}