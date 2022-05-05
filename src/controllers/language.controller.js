const getLanguages=(request, response)=>{
    response.json("Hola muhdo");
};
//exportar la funcion para poderla importar en cualquier otro lugar, se exporta mediante la llave methods
export const methods={
    getLanguages
};