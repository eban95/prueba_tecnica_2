import mongoose from 'mongoose';

const connectDB = async () => {
try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Conectado a MongoDB');
} catch (error) {
    console.error('Error al conectar a MongoDB:', error);
}
};

export default connectDB;
