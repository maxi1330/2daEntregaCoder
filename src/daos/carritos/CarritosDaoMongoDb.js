const ContenedroMongoDb = require('../../contenedores/ContenedorMongoDb');
const { carritoSchema } = require('../../../models/carrito.schema');

class CarritosDaoMongoDb extends ContenedroMongoDb {

    constructor() {
        super('carritos', carritoSchema);
    }

    async save(){
        super.save({productos: []});
    }

}

export default CarritosDaoMongoDb;