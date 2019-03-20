var express = require('express')
var router = express.Router()

const mascotasModel = require('../../models/mascotas')
const clientesModel = require('../../models/clientes')


// http://localhost:3000/api/mascotas     ------------------------      todas las mascotas 
router.get('/',(req, res) => {
    mascotasModel.getAllPets((err, rows) => {
        if(err) return res.json(err.message)
        res.json(rows)
    })
})

// http://localhost:3000/api/mascotas/mascotasCliente/:id   -----------------------      mascotas por cliente
router.get('/mascotasCliente/:id', (req, res) => {
    mascotasModel.getByClient(req.params.id, (err, rows) => {
       
        if(err) return res.json(err.message)
        res.json(rows)
    })
})

//  http://localhost:3000/api/mascotas/mascota/:id  ------------------------------      detalle de mascota
router.get('/mascota/:id',(req, res) => {
    mascotasModel.getById(req.params.id, (err, rows) => {
        
        if(err) return res.json(err.message)
        res.json(rows[0])
    })
    
})

// http://localhost:3000/api/mascotas/new         -------------------------------             nueva mascota
router.post('/new', (req, res) => {
    console.log(req.body)
    mascotasModel.create(req.body, (err, result) => {
        
        if(err) return res.json(err.message)
        res.json(result)
    })
})

//  http://localhost:3000/api/mascotas/delete     ----------------------------      borrar mascota
router.post('/delete', (req, res) => {
    mascotasModel.deletePet(req.body.id, (err, rows) => {
        if(err) return console.log(err.message)
        res.json(rows)
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