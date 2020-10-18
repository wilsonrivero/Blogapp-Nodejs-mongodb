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
    Categorie.find().sort({date: 'desc'}).then((categories) =>{
        res.render('admin/categories',{categories: categories.map(category => category.toJSON())}) 
    }).catch((erro) =>{
        req.flash('erro_msg', 'Houver erro em cadatrar a categoria')
        res.redirect('/admin')
    })
  
})

router.get('/categories/add', (req,res) =>{
    res.render('admin/addcat')
})


//Here we add on DataBase
router.post('/categories/new', (req,res) =>{
    let erros = []
    if(!req.body.nome ||typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({text: 'Nome Inválido'})
    }
    if(!req.body.slug || typeof req.body.slug==undefined || req.body.slug ==null){
        erros.push({text: 'Slug Inválido'})
    }
    if(req.body.nome.length < 2){
        erros.push({text: 'Nome da categoria pequeno'})
    }

    if(erros.length > 0){
        res.render('admin/addcat',{erros: erros})
    }else{
        const newCategorie = {
            nome: req.body.nome,
            slug: req.body.slug
        }
        new Categorie(newCategorie).save().then(()=>{
            req.flash('success_msg', "Caegoria creiado com sucesso")
            res.redirect('/admin/categories')
        }).catch((erro) =>{
            req.flash('erro_msg', "error ao cadatrar")
            res.redirect('/admin')
        })
    }
})

router.get('/categories/edit/:id', (req,res) =>{
    Categorie.findOne({_id:req.params.id}).lean().then((categorie) =>{
        res.render('admin/editcategories', {categorie: categorie})
    }).catch((err) =>{
        req.flash('erro_msg', 'HOuve erro')
        res.redirect('/amdin/categories')
    })
   
})

router.post('/categories/edit',(req,res) =>{
    Categorie.findOne({_id: req.body.id}).then((categoire) =>{
        categoire.nome = req.body.nome
        categoire.slug = req.body.slug

        categoire.save().then(()=>{
            req.flash('success_msg', 'categoria editada')
            res.redirect('/admin/categories')
        }).catch((err) =>{
            req.flash('erro_msg', 'houve errp')
            res.redirect('/admin/categories')
        })
    }).catch((err) =>{
        req.flash('erro_msg', 'houve erro')
        res.redirect('/admin/categories')
    })
})


router.post('/categories/delete', (req,res) =>{
    Categorie.remove({_id: req.body.id}).then(()=>{
        req.flash('success_msg', 'Categoria deleteada')
        res.redirect('/admin/categories')
    }).catch((err) =>{
        req.flash('erro_msg','Erro ao deletar' +err )
        res.redirect('/admin/categories')
    })
})
module.exports = router