//Loding modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser =require('body-parser')
const app = new express()
//const mongosse = require ('mongosse')

//CONFIG
    //bodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    
    //HANDLESBARS
    app.engine('handlebras', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//rotas


//outhers
const PORT = 3000
app.listen(PORT, ()=>{
    console.log('Server is running')
})