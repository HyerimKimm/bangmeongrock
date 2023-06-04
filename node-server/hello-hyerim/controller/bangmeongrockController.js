const 방명록 = require('../repository/bangmeongrockList');

module.exports = {
    findAll: (req, res) => {
        res.status(200).json(방명록);
    },
    create: (req, res) => {
        
    }
};