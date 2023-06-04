const express = require('express');
const cors = require('cors');
const server = express();

const port = 4999;
const 방명록router = require('./router/bangmeongrockRouter');

server.use(cors());

server.use('/bangmeongrock', 방명록router);

server.get('/', function(req,res){
    res.status(200).send('혜림이의 방명록 서버');
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});

module.exports = server;