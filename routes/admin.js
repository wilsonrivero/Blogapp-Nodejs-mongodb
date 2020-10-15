const express = require('express')
const router = express.Router()//this is for export routs from another files


router.get('/', (req, res) =>{
    res.render('admin/index')
})

router.get('/post', (req,res) =>{
    res.render('admin/test')
})
router.get('/categories',(req,res)=>{
    res.send('Page categories')
} )

module.exports = router