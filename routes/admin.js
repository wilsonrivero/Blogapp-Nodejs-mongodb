const express = require('express')
const router = express.Router()//this is for export routs from to another files
const mongosse = require('mongoose')

require('../models/categorie')
const Categorie = mongosse.model('categories')




router.get('/', (req, res) =>{
    res.render('admin/index')
})

router.get('/post', (req,res) =>{
    res.send('Page blog')
})
router.get('/categories',(req,res)=>{
    res.render('admin/categories')
})

router.get('/categories/add', (req,res) =>{
    res.render('admin/addcat')
})


//Here we add on DataBase
router.post('/categories/new', (req,res) =>{
    const newCategorie = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Categorie(newCategorie).save().then(()=>{
        console.log('Categorie created successfully')
    }).catch((erro) =>{
        console.log('Erro in the save categorie:' + erro)
    })
})

module.exports = router