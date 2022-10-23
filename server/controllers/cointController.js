const {PersonalCoin} = require('../models/models')
const ApiError = require('../error/ApiError');

class CointController {
    
    async getSome(req, res) {
        let {id, company} = req.query
        const coin = await PersonalCoin.findAll({
            where:{id:id,company:company} })
        return res.json(coin)
    }

}

module.exports = new CointController()