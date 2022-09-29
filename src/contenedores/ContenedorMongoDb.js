const mongoose = require('mongoose');
const { config } = require('../utils/config')

const strConn = config.mongodb;
await mongoose.connect(strConn);

class ContenedorMongoDb {
    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema);
    }

    async save(objectToSave) {
        try {
            await objectSaved = this.coleccion.create(objectToSave);
            return objectSaved.id;
        } catch (e) {
            throw new Error(`Error al guardar`)
        }
    }

    async getById(objectId){
        try {
            return this.coleccion.findById(objectId);
        } catch (e) {
            throw new Error(`Error al obtener el elemento ${objectId}`)
        }
    }

    async getAll(){
        try {
            return await this.coleccion.find({});
        } catch (e) {
            throw new Error(`Error al obtener listado`)
        }
    }

    async deleteById(objectId){
        try {
            let {id} = await this.coleccion.findOneAndRemove({_id: objectId})
            return id;
        } catch (e) {
            throw new Error(`Error al borrar`)
        }
    }

    async modify(objectModify){
        try {
            return this.coleccion.findByIdAndUpdate(objectModify.id, objectModify);
        } catch (e) {
            throw new Error(`Error al modificar`)
        }
    }
}
