import express from 'express';
import indexAuthRouter from './routes';

const AUTH_HOST = process.env.HOST ?? 'localhost';
const AUTH_PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.use(express.json());

// Authentication routes
app.use('/api/v1', indexAuthRouter);

// Health check route
app.get('/health', (req, res) => {
  res.send({ message: 'Hello from Auth API' });
});

const startAuthServer = () => {
  try {
    app.listen(AUTH_PORT, AUTH_HOST, () => {
      console.log(
        `[ 🚀 AUTH SERVICE 🚀 ] running on => http://${AUTH_HOST}:${AUTH_PORT}`
      );
    });
  } catch (error) {
    console.log('❌ Failed to start auth server', error);
    process.exit(1);
  }
};


// Start the server
startAuthServer();
