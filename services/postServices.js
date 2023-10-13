const appDataSource = require("../db")

// 게시글 생성하기
const createPost = async (req, res) => {
    const Posts = req.body.user_id
    const Content = req.body.content;

    const userpost = await appDataSource.query(`
    insert into threads(
        user_id,
        content
    )
    values(
        '${Posts}',
        '${Content}'
    )
    `);
    console.log('typeorm return data:', userpost);

    return res.status(200).json({ "message": "Postup_success" });
}
//전체 게시글 조회하기
const allgetPosts = async (req, res) => {
    const data = await appDataSource.query(`
    SELECT 
    u.id,
    u.nickname,
    t.content,
    t.user_id as userId,
    t.created_at as crreatedAt 
    FROM users u Join threads t
    ON u.id = t.user_id;
    `)
    console.log(data)

    return res.status(200).json({"message":"read threads"});
}
//유저의 게시글 조회하기
const usersPosts = async (req,res) => {
    const ID = req.body.user_id;

    const userPost = await appDataSource.query(`
    SELECT
        u.id,
        u.nickname,
        t.content,
        t.user_id as userId,
        t.created_at as createdAt
        FROM users u JOIN threads t 
        ON u.id = t.user_id where u.id = '${ID}'
    `)

    return res.status(200).json({"message":"UserPosts"})
}

//게시글 수정하기

const updata = async (req,res) => {
    const Data = req.body.content
    const UserId = req.body.user_id

    const updataPost = await appDataSource.query(`
        UPDATA thread set content =  '${Data}' 
        where user_id = ${UserId}
    `)

    return res.status(200).json({"message":"Updata_success"})
}
//게시글 삭제
const Delete = async (req,res) => {
    const Delet = req.body.user_id

    const deleted = await appDataSource.query(`
    delete from threads where user_id ='${Delet}'
    `)
    return res.status(200).json({"message":"Delete_success"})
}
//좋아요
const likes = async (req,res) => {
    const user_like = req.body.user_id
    const threadPost = req.body.thread_id

    const like = await appDataSource.query(`
    INSERT INTO thread_likes (
        user_id,
        thread_id
    ) VALUES (
        '${user_like}',
        '${threadPost}'
    )
    `)
    return res.status(201).json({"message":"likes"})
} 

module.exports = {createPost,allgetPosts,usersPosts,updata,Delete,likes}