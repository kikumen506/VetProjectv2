const db = require('../db')



// cliente por vet

let getByVet = (fk_vet, done) => {
    db.get().query('select * from clientes where fk_vet = ?', [fk_vet], (err, result)=>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}


//todos los clientes de los vet

let getAll = (done) => {
    db.get().query('select * from clientes', (err, rows) => {
        if(err) return console.log(err.message)
        done (null,rows)
    })
}


//añadir cliente al veterinario

let create = ({nombrecompleto, direccion, dni, poblacion, telefonomovil, email, mascotas, fk_vet}, done) => {
    
    db.get().query('insert into clientes values (null, ?, ?, ?, ?, ?, ?, ?, ?)', [nombrecompleto, direccion, dni, poblacion, telefonomovil, email, mascotas, fk_vet], (err, result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}

// actualizar los datos de los clientes cada vet

let update = (id, {nombrecompleto, direccion, dni, poblacion, telefonomovil, email, mascotas}, fk_vet, done) => {
    db.get().query('update clientes set nombrecompleto = ?, direccion = ?, dni = ?, poblacion = ?, telefonomovil = ?, email = ?, mascotas = ? where id = ?, fk_vet = ?',[id, nombrecompleto, direccion, dni, poblacion, telefonomovil, email, mascotas, fk_vet], (err,result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}


// boorrar clientes por vet
let deleteClient = (id, fk_vet, done) => {
    db.get().query('delete from clientes where id= ?, fk_vet = ?', [id, fk_vet], (err, result) =>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}

module.exports = {
    getByVet: getByVet,
    getAll: getAll,
    create: create,
    update: update,
    deleteClient: deleteClient
}