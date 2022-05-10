import { getConnection } from "../database/database";

//async = nos permiten indicar que una funcion es asincrona osea que los procesos duran un tiempo
//await = nos permite indicar que debemos esperar a que finalice cierto bloque de codigo
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
//exportar la funcion para poderla importar en cualquier otro lugar, se exporta mediante la llave methods
export const methods = {
    getLanguages
};