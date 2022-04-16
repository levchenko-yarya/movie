module.exports = app => {
    const controller = require('./genre.controller')
    const router = require('express').Router()

    router.get('/add', controller.add)
    router.post('/post', controller.store)
    router.get('/edit/:id', controller.edit)
    router.put('/update', controller.update)
    router.delete('/delete/:id', controller.delete)
    router.get('/:id', controller.get)
    router.get('/', controller.show)

    app.use('/genre', router)
}