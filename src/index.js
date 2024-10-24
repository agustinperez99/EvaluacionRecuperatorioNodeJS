import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './routes/productRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// conexion a mongodb
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error al conectar a MongoDB', err);
});


// rutas
app.use('/', router);

// iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
