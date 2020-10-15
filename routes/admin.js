const express = require('express')
const router = express.Router()//this is for export routs from to another files


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

module.exports = router