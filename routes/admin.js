const express = require('express')
const router = express.Router()//this is for export routs from another files


router.get('/', (req, res) =>{
   res.send('Page main')
})

router.get('/post', (req,res) =>{
    res.send('Page of the post')
})
router.get('/categories',(req,res)=>{
    res.send('Page categories')
} )

module.exports = router