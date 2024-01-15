import asyncHandler from '../utils/asyncHandler';
import {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  createTaskInDatabase,
} from '../services/taskService';
import ApiError from '../utils/apiError';
import sendApiResponse from '../utils/apiResponse';

// Get all tasks
const fetchAllTasks = asyncHandler(async (req, res) => {
  let query: Record<string, unknown> = {};

  if (req.query.priority) {
    query.priority = req.query.priority;
  }

  const data = await getAllTasks(query);
  sendApiResponse(res, 200, {
    success: true,
    message: 'All tasks retrieved successfully',
    data,
  });
});

// Get a specific task by ID
const fetchTaskById = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const task = await getTaskById(taskId);

  if (!task) {
    throw new ApiError(404, 'Task not found');
  }

  sendApiResponse(res, 200, {
    success: true,
    message: 'Task retrieved successfully',
    data: task,
  });
});

// Create a new task
const createTask = asyncHandler(async (req, res) => {
  const taskData = req.body;

  // Logic to create a new task (e.g., save it to the database)
  const newTask = await createTaskInDatabase(taskData);

  sendApiResponse(res, 201, {
    success: true,
    message: 'Task created successfully',
    data: newTask,
  });
});

// Update a specific task by ID
const updateTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const updatedTaskData = req.body;
  const updatedTask = await updateTaskById(taskId, updatedTaskData);

  if (!updatedTask) {
    throw new ApiError(404, 'Task not found');
  }

  sendApiResponse(res, 200, {
    success: true,
    message: 'Task updated successfully',
    data: updatedTask,
  });
});

// Delete a specific task by ID
const removeTaskById = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const deletedTask = await deleteTaskById(taskId);

  if (!deletedTask) {
    throw new ApiError(404, 'Task not found');
  }

  sendApiResponse(res, 200, {
    success: true,
    message: 'Task deleted successfully',
    data: deletedTask,
  });
});

export { fetchAllTasks, fetchTaskById, createTask, updateTask, removeTaskById };
