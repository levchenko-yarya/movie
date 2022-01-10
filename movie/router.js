const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.use('/', controller.show)
router.use('/:id', controller.get)
router.use('/add', controller.add)
router.use('/post', controller.store)
router.use('/edit/:id', controller.edit)
router.use('/update/:id', controller.update)
router.use('/delete/:id', controller.destroy)

module.exports = router