const productController = require('../controllers/productController.js')
const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)

router.get('/:id', productController.getOneProduct)

router.get('/:id', productController.updateProduct)

router.get('/:id', productController.DeleteProduct)

module.exports = router
