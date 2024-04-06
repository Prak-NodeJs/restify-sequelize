const { Product } = require("../models/product.model")
const {Order} = require('../models/order.model')
const createProduct = (req, res, next)=>{
    (async()=>{
         try {
            const productData = await Product.create(req.body)
            res.status(200)
            res.json({
                success:true,
                message:'product created',
                data:productData
            })
         } catch (error) {
            next(error)
         }
    })()
}

module.exports = {createProduct}