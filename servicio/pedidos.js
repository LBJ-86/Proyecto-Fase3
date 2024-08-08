import ModelFactory from '../model/DAO/pedidos/pedidosFactory.js'
import config from '../config.js'

import { preference } from './pago.js'

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerPedidos = async _ => {
        return await this.model.obtenerPedidos()
    }

    guardarPedido = async pedido => {
        const pedidoGuardado = await this.model.guardarPedido(pedido)
        return pedidoGuardado
    }

    createPreference = async prefItems => {
        //console.log(prefItems)
        try {
            const preferences = await preference.create(prefItems)

            return preferences.id
        }
        catch(error) {
            console.log(`Error al crear preferences: ${error.message}`)
            return null
        }
    }
}

export default Servicio


/* import ModelFactory from '../model/DAO/pedidos/pedidosFactory.js'
import config from '../config.js'

import { preference } from './pago.js'

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
        this.urlBack = ''
        this.carrito = []
    }

    obtenerPedidos = async _ => {
        return await this.model.obtenerPedidos()
    }

    guardarPedido = async pedido => {
        const pedidoGuardado = await this.model.guardarPedido(pedido)
        return pedidoGuardado
    }

    createPreference = async datos => {

        try {
            this.urlBack = datos.urlBack
            this.carrito = datos.carrito
            const preferences = await preference.create(datos.prefItems)
            return preferences.id
        }
        catch(error) {
            console.log(`Error al crear preferences: ${error.message}`)
            return null
        }
    }

    feedback = async result => {

        const { payment_id, status, merchant_order_id } = result
        
        if(status == 'approved') {
            const pedido = {compra: result, carrito: this.carrito, fyh: new Date().toLocaleString()}
            await this.guardarPedido(pedido)
        }
        return `${this.urlBack}?payment_id=${payment_id}&status=${status}&merchant_order_id=${merchant_order_id}`
    }
}

export default Servicio */