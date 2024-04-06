const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('ecom_shop',process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT
})

const dbConnection = async (req, res)=>{
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');

        // Synchronize models with database
        await sequelize.sync();
        console.log('Models synchronized with database.');
        
    } catch (error) {
        console.log(`error while connecting to db ${error}`)
        
    }
}

module.exports= {sequelize, dbConnection}
