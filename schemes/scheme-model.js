const  db = require('../data/db-config')

module.exports ={
    find,
    findById
}
function find(){
return db('Schemes')
}
function findById(id){
    return db('Schemes').where({id}).first();
}