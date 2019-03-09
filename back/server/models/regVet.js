const db = require('../db')

let bcrypt = require('bcrypt-nodejs')

let getById = (id, done)=>{
    db.get().query('select * from veterinarios where id = ?', [id], (err, result)=>{
        console.log('ENTRA')
        if(err) return done(err)
        done (null,result)
    })
}

let getAll = (done) => {
    db.get().query('select * from veterinarios',(err, rows)=>{
        if(err) return done(err)
        done (null,rows)
    })
}

let create = ({nombreclinica, nombreVet, telefono, email, password}, done) =>{

    let cryptoPass = bcrypt(password).toString()

    db.get().query('insert into veterinarios value (null, ?,?,?,?,?)', [nombreclinica, nombreVet, telefono, email, cryptoPass], (err,result)=>{
        if (err) return done (err)
        done (null,result)
    })
}

let updateVet=(id, {nombreclinica, email, password}, done) => {
    db.get().query('update veterinarios set nombreclinica = ?, email = ?, password = ? where id = ?',[nombreclinica, email, password, id], (err,result) => {
        if(err) return done(err)
        done (null,result)
    })
}

let deleteVet = (id,done)=>{
    db.get().query('delete from veterinarios where id = ?', [id], (err,result)=>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}

module.exports = {
    getAll: getAll, 
    getById: getById,
    create: create,
    updateVet: updateVet,
    deleteVet: deleteVet
}