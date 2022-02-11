//rutas para producto
const express = require('express');
const { crearProducto, obtenerProductos, actualizarProductos, obtenerProducto, eliminarProducto } = require('../controllers/productoController');
const routerProducto = express.Router();


// api/productos
routerProducto.post('/', crearProducto);
routerProducto.get('/', obtenerProductos);
routerProducto.put('/:id', actualizarProductos);
routerProducto.get('/:id', obtenerProducto);
routerProducto.delete('/:id', eliminarProducto);

module.exports = routerProducto;