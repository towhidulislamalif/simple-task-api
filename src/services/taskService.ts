import { ITask, Task } from '../models/taskModel';

export const getAllTasks = async (
  payload: Partial<ITask>
): Promise<ITask[]> => {
  return Task.find(payload);
};

export const getTaskById = async (taskId: string): Promise<ITask | null> => {
  return Task.findById(taskId);
};

export const createTaskInDatabase = async (
  payload: ITask
): Promise<ITask | null> => {
  return Task.create(payload);
};

export const updateTaskById = async (
  taskId: string,
  updatedTaskData: Partial<ITask>
): Promise<ITask | null> => {
  const updatedTask = await Task.findByIdAndUpdate(taskId, updatedTaskData, {
    new: true,
  });
  return updatedTask;
};

export const deleteTaskById = async (taskId: string): Promise<ITask | null> => {
  const deletedTask = await Task.findByIdAndDelete(taskId);
  return deletedTask;
};
