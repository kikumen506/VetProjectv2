const db = require('../db')

let login = (nombreVet, done) => {
    db.get().query('select * from veterinarios where nombreVet = ?', [nombreVet], (err,result) => {
        if(err) return done(err)
        done(null,result)
    })
}

let token = (token, id, done) => {
    console.log('token')
    db.get().query('update veterinarios set token = ? where id = ?', [token, id], (err, result)=>{
        if(err) return done(err)
        done (null, result)
    })
}



module.exports = {
    login: login,
    token, token
}