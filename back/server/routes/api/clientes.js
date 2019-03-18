var express = require('express')
var router = express.Router()

const clientesModel = require('../../models/clientes')

// http://localhost:3000/api/clientes
router.get('/', (req, res)=> {
    clientesModel.getAll((err, rows) => {
        
        if(err) return res.json(err.message)
        res.json(rows)
    })
})

// http://localhost:3000/api/clientes/clientesVet
router.post('/clientesVet',(req, res) => {
    clientesModel.getByVet(req.body.token, (err, rows) => {
        
        if(err) return res.json(err.message)
        res.json(rows)
    })
    
})

//  http://localhost:3000/api/clientes/clientesVet/new
router.post('/clientesVet/new', (req, res) => {
    
    clientesModel.create(req.body, (err, result) => {
        
        if(err) return res.json(err.message)
        res.json(result)
    })
    
})

// http://localhost:3000/api/clientes/clientesVet/edit      toggle boton nuevo cliente por editar cliente
router.post('/clientesVet/edit', (req, res)=>{
    clientesModel.update(req.body, (err, result) => {
        if(err) return console.log(err.message)
        res.json(result)   
    })
    console.log(req.body)
})

// http://localhost:3000/api/clientes/clientesVet/delete    problema, si tiene mascotas¿?
router.post('/clientesVet/delete', (req, res) => {
    clientesModel.deleteClient(req.body.id, (err, rows) => {
        if(err) return console.log(err.message)
        res.json(rows)
    })
})


module.exports = router;