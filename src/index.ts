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

export default app;
