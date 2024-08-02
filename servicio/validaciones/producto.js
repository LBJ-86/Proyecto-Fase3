import Joi from 'joi'

//https://joi.dev/api/?v=17.13.0

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().required(),
        codigo: Joi.string().required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        descripcionCorta: Joi.string().required(),
        descripcionLarga: Joi.string().required(),
        edadDesde: Joi.number().required(),
        edadHasta: Joi.number().required(),
        foto: Joi.string().required(),
        envio: Joi.boolean().required()
    })

    const { error } = productoSchema.validate(producto);
    //console.log(error)

    return error
}

export default validar