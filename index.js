//Loding modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser =require('body-parser')
const app = new express()
const admin = require('./routes/admin')//here we are calling the route
const path = require('path') //this is for to manipulate folders
const { join } = require('path')
const mongosse = require('mongoose')


//CONFIG
    //bodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    
    //HANDLESBARS
    app.engine('handlebars', handlebars())
    app.set('view engine', 'handlebars')

    //Public
    //here we show the folder about front-end
    app.use(express.static(path.join(__dirname,'public'))) 

    //config MIDDLEWARES
    app.use((req,res,next) =>{
        console.log('Im middleware')
        next()
    })

    //mongosse
    //here we are connecting with mongodb
    mongosse.Promise = global.Promise
    mongosse.connect('mongodb://localhost/bloapp').then(()=>{
        console.log('Connected successfully')
    }).catch((erro) =>{
        console.log('There is a erro' + erro)
    })

//routes
    //"/admin"  you have to use a prexi
    app.use('/admin',admin)

//outhers
const PORT = 3000
app.listen(PORT, ()=>{
    console.log('Server is running')
})