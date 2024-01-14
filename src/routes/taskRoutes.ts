import express from 'express';
import {
  fetchAllTasks,
  fetchTaskById,
  createTask,
  updateTask,
  removeTaskById,
} from '../controllers/taskController';

const router = express.Router();

// Route to get all tasks
router.get('/tasks', fetchAllTasks);

// Route to get a specific task by ID
router.get('/tasks/:taskId', fetchTaskById);

// Route to create a new task
router.post('/tasks/', createTask);

// Route to update a specific task by ID
router.put('/tasks/:taskId', updateTask);

// Route to delete a specific task by ID
router.delete('/tasks/:taskId', removeTaskById);

export default router;
