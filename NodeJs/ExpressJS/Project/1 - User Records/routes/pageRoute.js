const express = require('express')

const pageController = require('../controllers/pageController')


const router = express.Router()


router.route('/').get(pageController.pageIndex)



module.exports = router