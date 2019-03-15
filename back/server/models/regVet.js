const db = require('../db')

const bcrypt = require('bcrypt')
const saltRounds = 10;


//obtener vet por token

let getByToken = (token, done)=>{
    db.get().query('select * from veterinarios where token = ?', [token], (err, result)=>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}


//obtener todos los vets(para laparte de los usuarios)

let getAll = (done) => {
    db.get().query('select * from veterinarios',(err, rows)=>{
        if(err) return console.log(err.message)
        done (null,rows)
    })
}


// registrar nueva clinica

let create = ({nombreclinica, nombreVet, telefono, email, password,token}, done) =>{
    bcrypt.hash(password, saltRounds, function(err, hash) {
        
        db.get().query('insert into veterinarios values(null, ?,?,?,?,?, null)', [nombreclinica, nombreVet, telefono, email, hash, token], (err,result)=>{
            if (err) return console.log(err.message)
            done (null,result)
            
        })
        console.log(err)
    });
}


//acualizar datos de la clinica

let update = (id, {nombreclinica, email, password}, done) => {
    db.get().query('update veterinarios set nombreclinica = ?, email = ?, password = ? where id = ?',[nombreclinica, email, password, id], (err,result) => {
        if(err) return console.log(err.message)
        done (null,result)
    })
}


// eliminar clinica

let deleteUser = (id,done)=>{
    db.get().query('delete from veterinarios where id = ?', [id], (err,result)=>{
        if(err) return console.log(err.message)
        done (null,result)
    })
}

module.exports = {
    getAll: getAll, 
    getByToken: getByToken,
    create: create,
    update: update,
    deleteUser: deleteUser
}