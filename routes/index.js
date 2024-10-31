const router = require('express').Router()
router.use('/', require('./swagger'))
router.use('/', require('./programmers'))

module.exports = router