//Requires
var express = require('express');
var mongoose = require('mongoose'); //mongoose hace referencia a la libreria


//Inicializar variables
var app = express(); //De esta manera ya estoy definiendo mi express

//Conexion a la bd

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err; //El throw err , detiene todo el proceso , ya no sigue corriendo los demas 
    console.log('Base de Datos : \x1b[32m%s\x1b[0m', 'online');
})

//Rutas 
//next le dice a express que cuando se ejecute continue con la siguiente instruccion (se usa en los middelware)
app.get('/', (req, res, next) => {
    //Mandar las respuestas a las solicitudes que realizamos , y la respuesta sea un json y mandamos un objeto de js
      res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizado correctamente'

    });

})


//Escuchar peticiones
app.listen(3000, () => {
    /*%s -> esto es la variable q quiero colocar , 
    osea la sustitucion del parametro de esa opcion
    \x1b[32m -> inicio el color verde
    \x1b[0m ->ya termina el color verde y regresa al color por defecto
    */
    console.log('Iniciando el express server en puerto 3000 : \x1b[32m%s\x1b[0m', 'online');
});