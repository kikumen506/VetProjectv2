const db = require('../db')

// mascotas por cliente
let getByClient = (id, done) => {
    db.get().query('select * from mascotas where fk_clientes = (SELECT id FROM clientes WHERE id = ?)', [id], (err, result) => {
        if(err) return console.log(err.message)
        done (null, result)
    })
}

//   mascota por id

let getById = (id, done) => {
    db.get().query('select * from mascotas where id = ?', [parseInt(id)], (err, result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}

// todas las mascotas
let getAllPets = (done) => {
    db.get().query('select * from mascotas', (err, result) => {
        if(err) return console.log(err.message)
        done (null, result) 
    })
}

// nueva mascota al cliente
let create = ({chip, nombre, animal, raza, sexo, fechanacimiento, id}, done) => {
    db.get().query('insert into mascotas (chip, nombre, animal, raza, sexo, fechanacimiento, fk_clientes) values (?, ?, ?, ?, ?, ?, (SELECT id FROM clientes WHERE id = ?))', [chip, nombre, animal, raza, sexo, fechanacimiento, parseInt(id)], (err, result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
    
}
// actualizar datos mascota
let update = (id, {chip,nombre, animal, raza, sexo, fechanacimiento}, fk_clientes, done) => {
    db.get().query('update mascotas set chip =?, nombre = ?, animal = ?, raza = ?, sexo = ?,fechanacimiento = ? where id = ? and fk_clientes = ?', [id,chip, nombre, animal, raza, sexo, fechanacimiento, fk_clientes], (err, result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}

// Borrar mascota
let deletePet = (id, done) => {
    db.get().query('delete from mascotas where id = ?', [id], (err,result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}

module.exports = {
    getById: getById,
    getByClient: getByClient,
    getAllPets: getAllPets,
    create: create,
    update: update,
    deletePet: deletePet
}