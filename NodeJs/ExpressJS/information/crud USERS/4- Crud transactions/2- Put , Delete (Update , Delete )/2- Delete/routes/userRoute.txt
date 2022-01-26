const express = require('express')

const userController = require('../controllers/userController')


const router = express.Router()


router.route('/').post(userController.userCrate)
router.route('/').get(userController.usersFind)
router.route('/update/:id').get(userController.usersEditGet)
router.route('/update/:id').put(userController.usersEditPut)
router.route('/delete/:id').delete(userController.usersDelete)


module.exports = router