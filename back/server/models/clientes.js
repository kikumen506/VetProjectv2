const db = require('../db')



//  cliente por vet

let getByVet = (token, done) => {
    db.get().query('select * from clientes where fk_vet = (SELECT id FROM veterinarios WHERE token = ?)', [token], (err, result)=>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}

//   cliente por id

let getById = (id, done) => {
    db.get().query('select * from clientes where id = ?', [parseInt(id)], (err, result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}


//    todos los clientes de los vet

let getAll = (done) => {
    db.get().query('select * from clientes', (err, rows) => {
        if(err) return console.log(err.message)
        done (null,rows)
    })
}


//    añadir cliente al veterinario

let create = ( {nombrecompleto, direccion, dni, poblacion, telefonomovil, email, token}, done) => {
    
    db.get().query('INSERT INTO clientes (nombrecompleto, direccion,dni,poblacion, telefonomovil, email, fk_vet) VALUES (?,?,?,?,?,?, (SELECT id FROM veterinarios WHERE token = ?))', [nombrecompleto, direccion, dni, poblacion, telefonomovil, email, token], (err, result) => {
        if(err) return done(err)
        done (null,result)
    })
}

// actualizar los datos de los clientes cada vet

let update = (id, {nombrecompleto, direccion, dni, poblacion, telefonomovil, email}, done) => {

    let updateQuery = 'update clientes set '
    let arr = []

    if(nombrecompleto){
        updateQuery += 'nombrecompleto = ?, '
        arr.push(nombrecompleto)
    }

    if(direccion){
        updateQuery += 'direccion = ?, '
        arr.push(direccion)
    }

    if(dni){
        updateQuery += ' dni = ?, '
        arr.push(dni)
    }

    if(poblacion){
        updateQuery += ' poblacion = ?, '
        arr.push(poblacion)
    }

    if(telefonomovil){
        updateQuery += ' telefonomovil = ?, '
        arr.push(telefonomovil)
    }

    if(email){
        updateQuery += ' email = ? '
        arr.push(email)
    }

    if(id){
        arr.push(id)
    }

    updateQuery += "where id = ?"

    db.get().query(updateQuery, arr, (err,result) => {
        if(err) return console.log(err.message)
        done (null,result)
        
    })

    console.log(updateQuery)
    console.log(arr)

}


// boorrar clientes por vet
let deleteClient = (id, done) => {
    db.get().query('delete from clientes where id = ?', [id], (err, result) =>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}

module.exports = {
    getByVet: getByVet,
    getById:getById,
    getAll: getAll,
    create: create,
    update: update,
    deleteClient: deleteClient
}