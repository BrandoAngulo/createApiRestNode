import express from "express";
import morgan from "morgan";
//importacion de Routes o rutas
import languageRoutes from "./routes/language.routes";

const app = express();
//settings
app.set("port", 3000);

//middlwares = que es? = son pequeñas funciones intermedias entre una peticion y una respuesta, cuando nosotros utilizamos servicios a traves de internet lo que hacemos es hacer una  peticion a un servidor, esa peticion se procesa y nos envian una respuesta y para esto nos sirve los middlwares estan de intermediarios.
app.use(morgan("dev"));//aqui vamos a indicar que vamos a utilizar el modulo morgan en modo de desarrollo, va a permitir en la parte de la consola cuando despleguemos la aplicacion, vamos a tener un detalle de las peticiones que estoy haciendo.   
app.use(express.json());//usando json para poder enviar peticiones json a mi servidor 

//Routes
//para poder ingresar hay que ingresar en el explorador con la ruta por que si no va a salir error 404
app.use("/api/languages", languageRoutes); 

export default app;
