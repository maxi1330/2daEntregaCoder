const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    codigo : {type: Number, required: true},
    imagenUrl : {type: String, required: true},
    precio : {type: Number, required: true},
    stock : {type: Number, required: true}
}, { timestamps: true });

export default productoSchema;