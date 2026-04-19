import mongoose from 'mongoose';

const departamentoSchema = new mongoose.Schema({
codigo: {
    type: Number,
    required: true,
    unique: true
},
nombre: {
    type: String,
    required: true
}
}, {
timestamps: true
});

export default mongoose.model('departamento', departamentoSchema);