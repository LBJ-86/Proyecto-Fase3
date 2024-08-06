class ModelMem {

    constructor() {
        this.productos = [
            {
                nombre: "Silla Gaming",
                codigo: "sg1",
                precio: 90000,
                stock: 7,
                marca: "Play Haha",
                categoria: "Sillas-Gaming",
                descripcionCorta: "Silla Gaming Ergonómica y giratoria",
                descripcionLarga: "Silla Gaming Ergonómica de Cuero. Ideal para Oficina, tareas de escritorio y gamers exigentes.",
                edadDesde: 12,
                edadHasta: 99,
                foto: "https://m.media-amazon.com/images/I/61wnzULkSFL._AC_SL1500_.jpg",
                envio: true,
                id: "1"
            },
            {
                nombre: "Silla Gaming",
                codigo: "sg2",
                precio: 90000,
                stock: 12,
                marca: "HLFURNIEU",
                categoria: "Sillas-Gaming",
                descripcionCorta: "Silla Gaming Ergonómica y giratoria",
                descripcionLarga: "Silla Gaming Ergonómica de Cuero. Ideal para Oficina, tareas de escritorio y gamers exigentes.",
                edadDesde: 12,
                edadHasta: 99,
                foto: "https://m.media-amazon.com/images/I/61fHKDwGQ7L._AC_SL1500_.jpg",
                envio: true,
                id: "2"
            },
            {
                nombre: "Silla Gaming",
                codigo: "sg2",
                precio: 10500,
                stock: 4,
                marca: "LXRADEO",
                categoria: "Sillas-Gaming",
                descripcionCorta: "Silla Gaming Ergonómica y giratoria",
                descripcionLarga: "Silla gaming Ergonómica con Soporte Lumbar Ajustable Interno. Con diseño ergonómico inclinable. Ideal para Oficina, tareas de escritorio y gamers exigentes.",
                edadDesde: 12,
                edadHasta: 99,
                foto: "https://m.media-amazon.com/images/I/71OTpvHzgtL._AC_SL1500_.jpg",
                envio: true,
                id: "3"
            }

        ]
    }

    obtenerProductos = async () => this.productos

    obtenerProducto = async id => {
        const producto = this.productos.find(producto => producto.id === id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(+(this.productos[this.productos.length - 1]?.id || 0) + 1)

        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        const productoAnt = this.productos[index]
        const productoNuevo = { ...productoAnt, ...producto }

        this.productos.splice(index, 1, productoNuevo)
        return productoNuevo
    }

    borrarProducto = async id => {
        let productoEliminado = {}

        const index = this.productos.findIndex(p => p.id === id)

        if (index != -1) {
            productoEliminado = this.productos.splice(index, 1)[0]
        }
        return productoEliminado
    }
}

export default ModelMem