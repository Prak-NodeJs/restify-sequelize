const Router = require('restify-router').Router
const { createProduct } = require('../controller/product.controller');


const router = new Router()

router.post('/create',  createProduct);


module.exports = router;