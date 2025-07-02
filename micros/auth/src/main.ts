import express from 'express';
import indexAuthRouter from './routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.use(express.json());

// Authentication routes
app.use('/api/v1', indexAuthRouter);

// Health check route
app.get('/health', (req, res) => {
  res.send({ message: 'Hello from Auth API' });
});

app.listen(port, host, () => {
  console.log(`[ 🚀 ready 🚀 ] http://${host}:${port}`);
});
