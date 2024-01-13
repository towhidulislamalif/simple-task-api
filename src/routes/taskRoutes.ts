import express from 'express';
import {
  fetchAllTasks,
  fetchTaskById,
  updateTask,
  removeTaskById,
} from '../controllers/taskController';

const router = express.Router();

// Route to get all tasks
router.get('/tasks', fetchAllTasks);

// Route to get a specific task by ID
router.get('/tasks/:taskId', fetchTaskById);

// Route to update a specific task by ID
router.put('/tasks/:taskId', updateTask);

// Route to delete a specific task by ID
router.delete('/tasks/:taskId', removeTaskById);

export default router;
