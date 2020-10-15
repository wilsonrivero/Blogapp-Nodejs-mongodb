//Loding modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser =require('body-parser')
const app = new express()
const admin = require('./routes/admin')//here we are calling the route
//const mongosse = require ('mongosse')

//CONFIG
    //bodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    
    //HANDLESBARS
    app.engine('handlebras', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//routes
    app.use('/adm', admin)//"/admin"  you have to use a prexi

//outhers
const PORT = 3000
app.listen(PORT, ()=>{
    console.log('Server is running')
})