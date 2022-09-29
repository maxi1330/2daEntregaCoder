const ContenedorArchivo = require('../../contenedores/ContenedorArchivo');

class CarritosDaoArchivo extends ContenedorArchivo  {
    constructor() {
        super('carritos.json');
    }

    async save(){
        await super.save({productos: []});
    }
}