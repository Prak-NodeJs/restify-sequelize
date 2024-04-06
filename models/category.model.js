const {sequelize} = require('../config/db.config')
const {DataTypes}= require('sequelize')

const Category= sequelize.define('Category', {
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true     
    },
    image:{
        type:DataTypes.STRING,
        // unique:true
    }
}, {timestamps:true})



module.exports={Category}