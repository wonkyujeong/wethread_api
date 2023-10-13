// user.js
const date =  [
    {
        "userID" :1,
        "userName" : "Rebekah Johnson",
        "postingId" : 1,
        "postingTitle" : "간단한 HTTP API 개발 시작!",
        "postingContent" : "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현."
    },
    { 
        "userID" : 2,
        "userName" : "Fabian Predovic",
        "postingId" : 2,
        "postingTitle" : "HTTP의 특성",
        "postingContent" : "Request/Response와 Stateless!! "
    },
    {
        "userID" : 3,
        "userName" : "new user 1",
        "postingId" : 3,
        "postingTitle" : "내용 1",
        "postingContent" : "sampleContent3"
    },
    {
        "userID" : 4,
        "userName" : "new user 2",
        "postingId" : 4,
        "postingTitle" : "내용 2",
        "postingContent" : "sampleContent4"
    }
]
const users = [
    {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
    },
    {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
    },
];

    const posts = [
    {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Noxde.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
    },
    {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
    },
    ];

const createUser = (req, res) => {

    const user = req.body // 프론트에서 받아온 정보를 가져옵니다.
    // console.log(users) //프론트에서 받아온 정보를 출력

    users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password
    })

    console.log('after: ', users)

    res.json({ message: "USER_CREATED" })
}

const Bulletin = (req, res) => {
    const Bulletin = req.body

    posts.push({
        id: Bulletin.id,
        title: Bulletin.title,
        content: Bulletin.content,
        userId: Bulletin.userId
    })

    console.log('after:', posts)

    res.json({ message: "USERS_CREATED"})
}

const list = (req, res) => {

    console.log("after:", date)

    res.json({ message: "USER_CREATED" ,date })
}


module.exports = { createUser, Bulletin, list } // routing.js 에서 사용하기 위해 모듈로 내보냅니다.