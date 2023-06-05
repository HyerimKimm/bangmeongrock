const 방명록 = require('../repository/bangmeongrockList');

module.exports = {
    findAll: (req, res) => {
        res.status(200).json(방명록);
    },
    create: (req, res) => {
        const body = req.body;
        // { author: '혜림이', content: '내용이다' }
        const name = body.author;
        const content = body.content;
        const add_date = new Date();
        방명록.push({
            author:name,
            addDate:add_date,
            content:content
        });
        res.json({
            author:name,
            addDate:add_date,
            content:content
        });
    }
};