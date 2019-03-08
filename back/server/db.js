const mysql = require('mysql')

let pool = null

let connect = (done)=>{
    pool = mysql.createPool({
        host:'127.0.0.1',
        user: 'root',
        password:'',
        port:3306,
        database:'dogtorapp'
    })
    done()
}

let get = ()=>{
    return pool
}

module.exports={
    connect:connect,
    get:get
}