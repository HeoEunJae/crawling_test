const express = require("express");
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const options = {
    url : "https://lostark.game.onstove.com/Profile/Character/%EB%88%84%EB%82%9C%EC%95%84%EC%A7%81%EB%8F%84%EC%84%9C%ED%8F%AC%ED%84%B0%EC%9E%84",
    headers: {
        'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25'
    }
};

router.get("/test", (req, res) => {
 res.send({ test: "hi" });
});

request(options, (error, response, body) => {
    if (error) throw error;
    let $ = cheerio.load(body);
    try{
        $('main').each(function(index,elem){
        console.log($(this).text())
        })
    }
    catch(error){
        console.error(error);
    }
  });



module.exports = router;