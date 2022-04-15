const db = require('../db')
const Genre = db.genre

exports.show = (req, res) => {
    Genre.findAll({})
        .then(data => {
            res.send(data)
        })
        .catch()
}

exports.get = (req, res) => {
    Genre.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.add = (req, res) => {
    res.render('genre/add.hbs')
}

exports.store = (req, res) => {
    const genre = {
        title: req.body.title,
        published: req.body.published
    }

    Genre.create(genre)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.edit = (req, res) => {
    res.render('genre/edit.hbs')
}

exports.update = (req, res) => {
    const id = req.params.id

    Genre.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.delete = (req, res) => {
    Genre.destroy({
        where: {id: req.params.id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}