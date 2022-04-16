const db = require('../db')
const State = db.state

exports.show = (req, res) => {
    State.findAll({})
        .then(data => {
            res.send(data)
        })
}

exports.add = (req, res) => {
    res.render('state/add.hbs')
}

exports.store = (req, res) => {
    const state = {
        title: req.body.title
    }
    State.create(state)
        .then(data => {
            res.send(data)
        })
}

exports.delete = (req, res) => {
    State.destroy({where: {id: req.params.id}})
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}