const router = require('express').Router()

const companiesController = require('../controllers/companies')
const programmersController = require('../controllers/programmers')
const projectsController = require('../controllers/projects')
const reviewsController = require('../controllers/reviews')

const { IsAuthenticated } = require("../middleware/authenticate")

router.get('/', companiesController.getAll)

router.get('/:id', companiesController.getSingle)

router.post('/', IsAuthenticated ,companiesController.createCompanies)

router.put('/:id', IsAuthenticated, companiesController.updateCompanies)

router.delete('/:id', IsAuthenticated, companiesController.deleteCompanies)

router.get('/', programmersController.getAll)

router.get('/:id', programmersController.getSingle)

router.post('/', IsAuthenticated ,programmersController.createProgrammer)

router.put('/:id', IsAuthenticated, programmersController.updateProgrammer)

router.delete('/:id', IsAuthenticated, programmersController.deleteProgrammer)

router.get('/', projectsController.getAll)

router.get('/:id', projectsController.getSingle)

router.post('/', IsAuthenticated ,projectsController.createProject)

router.put('/:id', IsAuthenticated, projectsController.updateProject)

router.delete('/:id', IsAuthenticated, projectsController.deleteProject)

router.get('/', reviewsController.getAll)

router.get('/:id', reviewsController.getSingle)

router.post('/', IsAuthenticated ,reviewsController.createReview)

router.put('/:id', IsAuthenticated, reviewsController.updateReview)

router.delete('/:id', IsAuthenticated, reviewsController.deleteReview)

module.exports = router