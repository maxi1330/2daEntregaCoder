const ContenedroMongoDb = require('../../contenedores/ContenedorMongoDb');
const { productosSchema } = require('../../../models/producto.schema');

class ProductosDaoMongoDb extends ContenedroMongoDb {

    constructor() {
        super('productos',productosSchema);
    }

}

export default ProductosDaoMongoDb;