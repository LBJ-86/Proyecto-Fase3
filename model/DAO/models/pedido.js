import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    compra: Object,
    pedido: Array
}, { versionKey: false })

export const PedidoModel = mongoose.model('pedidos', pedidoSchema)