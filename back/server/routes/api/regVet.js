var express = require('express');
var router = express.Router();

const regVetModel = require ('../../models/regVet')


// http://localhost:3000/api/regVet
router.get('/', (req, res)=> {
    regVetModel.getAll((err, rows) => {
        res.json(rows)
    })
})
// http://localhost:3000/api/regVet/:id
router.get('/:id', (req, res) => {
    regVetModel.getById(req.params.id, (err, rows) => {
        res.json(rows)
    })
})

// http://localhost:3000/api/regVet/new
router.post('/new', (req, res) => {
    regVetModel.create(req.body, (err, result) => {
        res.json(result)
    })
})

// http://localhost:3000/api/regVet/edit/:id
router.post('/edit/:id', (req, res)=>{
    regVetModel.updateVet(req.params.id, req.body, (err, result) => {
        if(err) return console.log(err.message)
        res.json(result)   
    })
    console.log(req.body)
})

// http://localhost:3000/api/regVet/delete/:id
router.get('/delete/:id', (req, res) => {
    regVetModel.deleteVet(req.params.id, (err, rows)=>{
        if(err) return console.log(err.message)
        res.json(rows)
    })
})




module.exports = router;