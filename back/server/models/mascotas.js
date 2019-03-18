const db = require('../db')

// mascotas por cliente
let getByClient = (fk_clientes, done) => {
    db.get().query('select * from mascotas where fk_clientes', [fk_clientes], (err, result) => {
        if(err) return console.log(err.message)
        done (null, result)
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
let create = ({chip, nombre, animal, raza, sexo, fechanacimiento,fk_clientes}, done) => {
    db.get().query('insert into mascotas values (null, ?, ?, ?, ?, ?, ?, ?)', [chip, nombre, animal, raza, sexo, fechanacimiento, fk_clientes], (err, result) => {
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
let deletePet = (id, fk_clientes, done) => {
    db.get().query('delete from mascotas where id = ? and fk_clientes = ?', [id, fk_clientes], (err,result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}

module.exports = {
    getByClient: getByClient,
    getAllPets: getAllPets,
    create: create,
    update: update,
    deletePet: deletePet
}