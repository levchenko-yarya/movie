module.exports = app => {
    const controller = require('./state.controller')
    const router = require('express').Router()

    router.get('/add', controller.add)
    router.post('/post', controller.store)
    router.delete('/delete/:id', controller.delete)
    router.get('/', controller.show)

    app.use('/state', router)
}