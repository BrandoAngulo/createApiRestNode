import { Router } from "express";
import { methods as languageController } from "../controllers/language.controller";

const router = Router();

//rutas 
// ruta para obtener peticiones con get
router.get("/", languageController.getLanguages);
//ruta para obtener la peticion recibiendo parametros por url
router.get("/:id", languageController.getLanguage);//la funcion seria getLanguage
//ruta para enviar peticiones con post
router.post("/", languageController.addLanguage);

export default router; 