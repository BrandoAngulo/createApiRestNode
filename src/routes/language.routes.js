import { Router } from "express";
import { methods as languageController } from "../controllers/language.controller";

const router = Router();

//rutas 
// ruta para obtener peticiones con get
router.get("/", languageController.getLanguages);
//ruta para obtener la peticion recibiendo parametros por url
router.get("/:id", languageController.getLanguage);//la funcion seria getLanguage
//ruta para insertar peticiones con post
router.post("/", languageController.addLanguage);
//ruta para DELETE
router.delete("/:id", languageController.deleteLanguage);
//ruta para UPDATE
router.put("/:id", languageController.updateLanguage);

export default router; 