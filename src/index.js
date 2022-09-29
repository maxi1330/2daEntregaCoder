let productosDao
let carritoDao

switch (process.env.TYPE_PERSISTENCE){
    case 'firebase':
        productosDao = await require('./daos/productos/ProductosDaoFirebase');
        carritoDao = await require('./daos/carritos/CarritosDaoFirebase');
        break
    case 'mongodb':
        productosDao = await require('./daos/productos/ProductosDaoMongoDb');
        carritoDao = await require('./daos/carritos/CarritosDaoMongoDb');
        break
    case 'archives':
    default:
        productosDao = await require('./daos/productos/PorductosDaoArchivo');
        carritoDao = await require('./daos/carritos/CarritosDaoArchivo');
        break
}

export { productosDao, carritoDao};