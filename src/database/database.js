//importar desde la base de datos mysql, permite conectarme a la db 
import mysql from "promise-mysql";
//importar la configuracion para que pueda acceder
import config from "./../config";

const connection = mysql.createConnection({

    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password

});

//proveer la constante retornandola
const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};
