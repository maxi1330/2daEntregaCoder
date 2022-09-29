const mongoose = require('mongoose');
const { Schema } = mongoose;

const carritoSchema = new Schema({
    productos: {type: [], required: true}
}, { timestamps: true });

export default carritoSchema;