var express = require('express')
var router = express.Router()

let tokengn = require('tokengn')
let bcrypt = require('bcrypt')
const logVetModel = require('../../models/logVet')



// http://localhost:3000/api/logVet
router.post('/', (req, res) => {
    
    logVetModel.login(req.body.nombreVet, (err, result) => {

        console.log(result)

        if (err) return console.log(err.message)

        if (result.length == 0) {
            return res.json({ error: 'usuario o contraseña incorreto'})
        }

        if(result.length == 1) {

            let ok = bcrypt.compareSync(req.body.password, result[0].password)
            console.log(ok)

            if( ok == true) {

                let token = tokengn({})

                logVetModel.token(token, result[0].id, (err, result) => {
                    return res.json(token)
                })
            } else {
                return res.json({ error: 'usuario no registrado'})
            }
        }
    })
})




module.exports = router;