var express = require('express')
var router = express.Router()

const clientesModel = require('../../models/clientes')

// http://localhost:3000/api/clientes  --------------- todos los clientes
router.get('/', (req, res)=> {
    clientesModel.getAll((err, rows) => {
        
        if(err) return res.json(err.message)
        res.json(rows)
    })
})

// http://localhost:3000/api/clientes/clientesVet ---------------- todos los clientes del vet
router.post('/clientesVet',(req, res) => {
    clientesModel.getByVet(req.body.token, (err, rows) => {
        
        if(err) return res.json(err.message)
        res.json(rows)
    })
    
})

//  http://localhost:3000/api/clientes/clientesVet/new   -------------- registro nuevo cliente
router.post('/clientesVet/new', (req, res) => {
    
    clientesModel.create(req.body, (err, result) => {
        
        if(err) return res.json(err.message)
        res.json(result)
    })
    
})

//  http://localhost:3000/api/clientes/clientesVet/:id  -----------      detalle de cliente
router.get('/clientesVet/:id',(req, res) => {
    clientesModel.getById(req.params.id, (err, rows) => {
        
        if(err) return res.json(err.message)
        res.json(rows[0])
    })
    
})



// http://localhost:3000/api/clientes/clientesVet/edit/:id     ----------------- editar cliente 
router.post('/clientesVet/edit/:id', (req, res)=>{
    clientesModel.update(req.params.id, req.body, (err, result) => {
        if(err) return console.log(err.message)
        res.json(result)   
    })
    console.log(req.body)
})

// http://localhost:3000/api/clientes/clientesVet/delete   ------------------ borrar cliente
router.post('/clientesVet/delete', (req, res) => {
    clientesModel.deleteClient(req.body.id, (err, rows) => {
        if(err) return console.log(err.message)
        res.json(rows)
    })
})


module.exports = router;