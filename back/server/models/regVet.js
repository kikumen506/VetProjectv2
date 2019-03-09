const db = require('../db')

const bcrypt = require('bcrypt')
const saltRounds = 10;

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

let create = ({nombreclinica, nombreVet, telefono, email, password,token}, done) =>{

    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        db.get().query('insert into veterinarios values(null, ?,?,?,?,?, null)', [nombreclinica, nombreVet, telefono, email, hash,token], (err,result)=>{
            if (err) return done (err)
            done (null,result)
            console.log(email)
        })
        console.log(hash)
    });
   
}

// let create = ({nombreclinica,nombreVet, telefono, email, password}, done) =>{

//     

//     db.get().query('insert into veterinarios values (null, ?,?,?,?,?)', [nombreclinica, nombreVet,telefono, email, password], (err,result)=>{
//         if (err) return done (err)
//         done (null,result)
//     })
// }

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