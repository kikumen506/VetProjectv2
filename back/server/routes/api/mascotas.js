var express = require('express')
var router = express.Router()

const mascotasModel = require('../../models/mascotas')


// http://localhost:3000/api/mascotas
router.get('/',(req, res) => {
    mascotasModel.getAllPets((err, rows) => {
        if(err) return res.json(err.message)
        res.json(rows)
    })
})

// http://localhost:3000/api/mascotas/mascotasCliente
router.post('/mascotasCliente', (req, res) => {
    mascotasModel.getByClient(req.body.fk_clientes, (err, rows) => {
       
        if(err) return res.json(err.message)
        res.json(rows)
    })
})

// http://localhost:3000/api/mascotas/new
router.post('/new', (req, res) => {
    mascotasModel.create(req.body, (err, result) => {
        
        if(err) return res.json(err.message)
        res.json(result)
    })
})

// http://localhost:3000/api/mascotas/edit/:id
// router.post('/edit/:id', (req, res) => {
//     mascotasModel.update(req.params.id, req.body, (err, result) => {
//         if(err) return console.log(err.message)
//         res.json(result)
//     })
//     console.log(req.body)
// })


router.post('/edit/:id', (req, res) => {
    mascotasModel.update(req.params.id, {
        chip: req.body.chip,
        nombre: req.body.nombre,
        raza: req.body.raza,
        sexo: req.body.sexo,
        fechanacimiento: req.body.fechanacimiento,
        fk_clientes: req.body.fk_clientes
    }, (err, result) => {
        if(err) return console.log(err.message)
        res.json(result)
    })
    console.log(req.body)
})



module.exports = router;