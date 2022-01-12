const Movie = require('./model')

exports.show = (req, res) => {
    Movie
        .findAll({raw: true})
        .then(movies => {
            res.render('show.hbs', {
                movies: movies
            })
        })
        .catch(err => console.log(err))
}

exports.get = (req, res) => {
    Movie
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
    Movie
        .create({
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
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
    Movie
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
    Movie
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