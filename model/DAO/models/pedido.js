import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    usuario: Object,
    compra: Object,
    fyh: String,
    carrito: Array
}, { versionKey: false })

export const PedidoModel = mongoose.model('pedidos', pedidoSchema)


/* import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    compra: Object,
    pedido: Array
}, { versionKey: false })

export const PedidoModel = mongoose.model('pedidos', pedidoSchema) */