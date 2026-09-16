import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import tarefaRoutes from './src/routes/taskRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

app.use('/api', tarefaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
