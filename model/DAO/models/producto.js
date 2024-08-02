import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: String,
    codigo: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    descripcionCorta: String,
    descripcionLarga: String,
    edadDesde: Number,
    edadHasta: Number,
    foto: String,
    envio: Boolean,
}, { versionKey: false })

export const ProductoModel = mongoose.model('productos', productoSchema)