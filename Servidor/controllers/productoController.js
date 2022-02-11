const { response, request } = require("express");
const Producto = require("../models/Producto");

const crearProducto = async(req = request, res = response) => {
    try {
        let producto;
        //Crear producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Eror desde el servidor crearProducto');
    }
}

const obtenerProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Eror desde el servidor obtenerProductos');
    }
}

const actualizarProductos = async(req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({
                msg: 'no existe el producto'
            });
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto);



    } catch (error) {
        console.log(error);
        res.status(500).send('Eror desde el servidor actualizarProductos');
    }
}

const obtenerProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({
                msg: 'no existe el producto'
            });
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Eror desde el servidor obtenerProducto');
    }
}

const eliminarProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({
                msg: 'no existe el producto'
            });
        }
        await Producto.findByIdAndRemove({ _id: req.params.id })
        res.json({
            "msg": "Producto eliminado con exito"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Eror desde el servidor eliminarProducto');
    }
}

module.exports = {
    crearProducto,
    obtenerProductos,
    actualizarProductos,
    obtenerProducto,
    eliminarProducto
}