const Genre = require('./genre.model')

exports.show = (req, res) => {
    Genre.findAll({})
        .then(data => {
            res.send(data)
        })
        .catch()
}

exports.get = (req, res) => {
    const id = req.params.id

    Genre.findOne(id)
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
    const id = req.params.id

    Genre.destroy({
        where: {id: id}
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