import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
codigo: {
    type: Number,
    required: true
},
nombre: {
    type: String,
    required: true
},
apellido1: {
    type: String,
    required: true
},
apellido2: {
    type: String,
    required: true
},
codigo_departamento: {
    type: Number,
    required: true
}
}, {
    timestamps: true
});

export default mongoose.model('Empleado', empleadoSchema);