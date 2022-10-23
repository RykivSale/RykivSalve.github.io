const Router = require('express')
const router = new Router()
const cointController = require('../controllers/cointController')


router.get('/', cointController.getSome)

module.exports = router