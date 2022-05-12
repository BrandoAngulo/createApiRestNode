import { getConnection } from "../database/database";

//async = nos permiten indicar que una funcion es asincrona osea que los procesos duran un tiempo
//await = nos permite indicar que debemos esperar a que finalice cierto bloque de codigo
//LISTAR
const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//obtener la peticion del lenguage por el parametro osea por medio de la url solo 1 un dato
//LISTAR 1 DATO
const getLanguage = async (req, res) => {

try {
    console.log(req.params);
    const {id}=req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?",id);//recibe el parametro id que hemos hecho con la const por parametro 
    res.json(result);
} catch (error) {
    res.status(500);
    res.send(error.message);
}
};

//UPDATE
const updateLanguage = async (req, res) => {
    const {id} = req.params;
    const {name, programmers} = req.body;
if (id === undefined || name === undefined || programmers === undefined) {
    res.status(400).json({message: "Bad Pequest. please fill all field"});
}
    try {
        const language = {id, name, programmers};
        console.log(req.params);
        const connection = await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id = ?",[language,id]);//el primer ? es por los parametros que se le dan y el segundo para el id que se va a editar 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//DELETE
const deleteLanguage = async (req, res) => {

    try {
        console.log(req.params);
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM language WHERE id = ?",id);//recibe el parametro id que hemos hecho con la const por parametro 
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    };

//INSERTAR 
const addLanguage = async (req, res) => {
    try {
        //creacion de constantes que tenemos en la db para asi hacer la inserccion de datos a la misma db 
        const {name, programmers}=req.body; //con req.body quiere decir que enviamos la peticion por el cuerpo del codigo
        //condicional si alguno de los campos se envian vacios
        if (name === undefined || programmers === undefined) {
            res.status(400).json({message: "Bad Request. Please fill all field. "});//solicitud mala. porfavor rellene todas los campos
        }
        //creacion de objeto para hacer la inserccion sin necesidad de digitar el query con tantos datos
        const language = {name, programmers};
        const connection = await getConnection();                                     
        const result = await connection.query("INSERT INTO language SET ?",language);
        res.json({message: "Language added"});//respuesta cuando se agregue el lenguaje
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
//exportar la funcion para poderla importar en cualquier otro lugar, se exporta mediante la llave methods
export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    deleteLanguage,
    updateLanguage
};