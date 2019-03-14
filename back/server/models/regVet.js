const db = require('../db')

const bcrypt = require('bcrypt')
const saltRounds = 10;

let getByToken = (token, done)=>{
    
    db.get().query('select * from veterinarios where token = ?', [token], (err, result)=>{
        
        if(err) return console.log(err.message)
        done (null,result)
        
    })
}

let getAll = (done) => {
    db.get().query('select * from veterinarios',(err, rows)=>{
        if(err) return console.log(err.message)
        done (null,rows)
    })
}

let create = ({nombreclinica, nombreVet, telefono, email, password,token}, done) =>{

    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        db.get().query('insert into veterinarios values(null, ?,?,?,?,?, null)', [nombreclinica, nombreVet, telefono, email, hash,token], (err,result)=>{
            if (err) return console.log(err.message)
            done (null,result)
            console.log()
        })
        console.log()
    });
}

let updateVet=(id, {nombreclinica, email, password}, done) => {
    db.get().query('update veterinarios set nombreclinica = ?, email = ?, password = ? where id = ?',[nombreclinica, email, password, id], (err,result) => {
        if(err) return console.log(err.message)
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
    getByToken: getByToken,
    create: create,
    updateVet: updateVet,
    deleteVet: deleteVet
}