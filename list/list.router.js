module.exports = app => {
    const controller = require('./list.controller')
    const router = require('express').Router()

    router.get('/add', controller.add)
    router.get('/:id', controller.get)
    router.post('/post', controller.store)
    router.get('/edit/:id', controller.edit)
    router.put('/update/:id', controller.update)
    router.delete('/delete/:id', controller.destroy)
    router.get('/', controller.show)

    app.use('/list', router)
}