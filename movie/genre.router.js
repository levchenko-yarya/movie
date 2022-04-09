const express = require('express')
const controller = require('./genre.controller')
const router = express.Router()

router.use('/:id', controller.get)
router.use('/add', controller.add)
router.use('/post', controller.store)
router.use('/edit/:id', controller.edit)
router.use('/update', controller.update)
router.use('/delete/:id', controller.delete)
router.use('/', controller.show)

module.exports = router