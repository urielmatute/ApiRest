const db = require ('../../BD/mysql');
const TABLA = 'empleados';

function todos(){

    return db.todos(TABLA);
}

module.exports = {
    todos,
}