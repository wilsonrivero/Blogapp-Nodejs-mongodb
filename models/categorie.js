const mongosse = require('mongoose')
const Schema = mongosse.Schema


//Creating a collections/table
const Categoria = new Schema({
    nome:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:  Date.now()//here is a value default
    }

})


mongosse.model('categories'/*Here is the name of collection */, Categoria)