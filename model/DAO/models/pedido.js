import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    usuario: Object,
    compra: Object,
    carrito: Array
}, { versionKey: false })

export const PedidoModel = mongoose.model('pedidos', pedidoSchema)