const { admin } = require('firebase-admin');
const { config } = require('../utils/config');

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
});

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion);
    }

    async save(objectToSave) {
        try {
            await objectSaved = this.coleccion.add(objectToSave);
            return objectSaved.id;
        } catch (e) {
            throw new Error(`Error al guardar`)
        }
    }

    async getById(objectId){
        try {
            return this.coleccion.doc(objectId).get();
        } catch (e) {
            throw new Error(`Error al obtener el elemento ${objectId}`)
        }
    }

    async getAll(){
        try {
            let objets = [];
            const response = await this.coleccion.get();
            response.foreach( doc => {
                objets.push({id: doc.id , ...doc.data()});
            });
            return objets
        } catch (e) {
            throw new Error(`Error al obtener listado`)
        }
    }

    async deleteById(objectId){
        try {
            let {id} = await this.coleccion.doc(objectId).delete();
            return id;
        } catch (e) {
            throw new Error(`Error al borrar`)
        }
    }

    async modify(objectModify){
        try {
            return this.coleccion.doc(objectModify.id).update(objectModify);
        } catch (e) {
            throw new Error(`Error al modificar`)
        }
    }
}