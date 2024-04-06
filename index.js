const restify = require('restify')
const dotenv = require('dotenv')
dotenv.config()
const {dbConnection} = require('./config/db.config')
const userRoute = require('./routes/user.routes')
const productRoute = require('./routes/product.route')


const server= restify.createServer()

//middleware
server.use(restify.plugins.authorizationParser())
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.dateParser())
server.use(restify.plugins.queryParser())


//dbconnection
dbConnection()

//routes
userRoute.applyRoutes(server, '/v1/user')
productRoute.applyRoutes(server, '/v1/product')



//error handling
server.use((err, req, res, next)=>{
    const message = err.message
    const statusCode = err.statusCode
    res.status(statusCode)
    res.json({
        message:message
    })
})  


const PORT = process.env.PORT||3000

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})