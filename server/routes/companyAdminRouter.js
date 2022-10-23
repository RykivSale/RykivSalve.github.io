const Router = require('express')
const router = new Router()
const companyAdminController = require('../controllers/companyAdminController')


router.get('/', companyAdminController.getAll)

module.exports = router
