const {sequelize} = require('../config/db.config')
const {DataTypes}= require('sequelize')
const { Category } = require('./category.model')

const Product = sequelize.define('Product', {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true     
    },
    image:{
        type:DataTypes.STRING,
        unique:true
    },
    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        defaultValue:1
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {timestamps:true})


Category.hasMany(Product, {
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})

Product.belongsTo(Category)

module.exports={Product}