import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API loaded successfully!',
  });
});

// Task routes
import taskRoutes from './routes/taskRoutes';
app.use('/api/v1', taskRoutes);

export default app;
