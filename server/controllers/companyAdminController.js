const {CompanyAdmin} = require('../models/models')
const ApiError = require('../error/ApiError');

class CompanyAdminController {

    async getAll(req, res) {
        const companyAdmin = await CompanyAdmin.findAll()
        return res.json(companyAdmin)
    }

}

module.exports = new CompanyAdminController()
