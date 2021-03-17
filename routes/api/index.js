const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/products', require('./product'))

exports = module.exports = {
    route
}