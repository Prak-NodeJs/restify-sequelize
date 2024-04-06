const {sequelize} = require('../config/db.config')
const {DataTypes}= require('sequelize')
const { Product } = require('./product.model')
const { Order } = require('./order.model')

const User = sequelize.define('User', {
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true     
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        validate:{isEmail:true},
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'Active'
    }
}, {timestamps:true})


//relationship between user and product
User.hasMany(Product, {
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
Product.belongsTo(User)

//relationship between user and order

User.hasMany(Order, {
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

Order.belongsTo(User)

module.exports={User}