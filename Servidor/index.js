const express = require('express');
const conectarDB = require('./config/db');
const routerProducto = require('./routes/producto');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conectar a base de datos
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/productos', routerProducto);

//Definicion de la ruta
app.get('/', (req, res) => {
    res.send('helloword');
});

app.listen(4001, () => {
    console.log('El servidor esta arriba en el puerto 4001');
})