const { DataTypes}= require('sequelize')
const {sequelize} = require('../config/db.config')

console.log("hello how are you")

const Order = sequelize.define('Order',{
    items:{
        type:DataTypes.STRING
    },
    shippingAddress:{
        type:DataTypes.STRING
    }
})

module.exports = {Order}
