const List = require('./list.model')

exports.show = (req, res) => {
    List
        .findAll({raw: true})
        .then(movies => {
            res.render('show.hbs', {
                movies: movies
            })
        })
        .catch(err => console.log(err))
}

exports.get = (req, res) => {
    List
        .findOne({
            where: {
                id: req.params.id
            }
        })
        .then(movie => {
            if (!movie) return
            res.render('get.hbs', {
                movie: movie
            })
        })
        .catch(err => console.log(err))
}

exports.add = (req, res) => {
    res.render('add.hbs')
}

exports.store = (req, res) => {
    List
        .create({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}

exports.edit = (req, res) => {
}

exports.update = (req, res) => {
    List
        .update({
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            url: req.body.url
        })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
}

exports.destroy = (req, res) => {
    List
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
}
