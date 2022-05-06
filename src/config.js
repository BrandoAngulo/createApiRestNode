import { config } from "dotenv";

config();
//ES BUENA PRACTICA PONER AL FINAL || "" DE BUSCAR LOS DATOS EN EL ENV por si depronto no los encuentra
//esto se hace directamente obteniendo los datos del env para cuando tenga que compartir el aplicativo no se comparta los datos de la db propia.
export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};