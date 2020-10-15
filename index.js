//Loding modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser =require('body-parser')
const app = new express()
const admin = require('./routes/admin')//here we are calling the route
const path = require('path') //this is for to manipulate folders
const { join } = require('path')

//const mongosse = require ('mongosse')

//CONFIG
    //bodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    
    //HANDLESBARS
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Public
    app.use(express.static(path.join(__dirname,'public')))//here we show the folder about front-end 

//routes
    app.use('/admin',admin)//"/admin"  you have to use a prexi

//outhers
const PORT = 3000
app.listen(PORT, ()=>{
    console.log('Server is running')
})