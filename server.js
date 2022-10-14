const express = require("express");
const app = express();
const path = require("./Router/path");
const bodyParser = require("body-parser");
const cors = require("cors");

// app.get('/', function(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
// })

// let safesitelist = "https://lostark.game.onstove.com/Profile/Character" 

// cors문제 해결 => 리액트만 연결됨
// const corsOptions = {
// //  origin: `http://localhost:3000`,
// //  credential: true, // 쿠키 세션에 접근
//     origin: function(origin, callback) {
//         let issafesitelisted = safesitelist.indexOf(origin) !== -1;
//         callback(null, issafesitelisted);
//     },
//     credentials: true
// };

app.enableCors({
    origin : process.env.CLIENT_URL,
    mehtod : ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders : ['access-control-allow-origin','X-Requested-With', 'Content-Type', 'Accept'],
    credential : true,
    maxAge : 3600,
    optionsSuccessStatus:204,
});

app.use(cors(corsOptions));

// 받은 데이터를 Json 형태로 만듬
app.use(bodyParser.json());

app.use("/", path);

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
 console.log(`Listening on port ${port}`);
});