import mongoose from 'mongoose';

// Define the structure of the Task entity
interface ITask {
  title: string;
  description?: string;
  completed: boolean;
  priority: 'Low' | 'Medium' | 'High';
}

// Create a Mongoose schema for the Task entity
const taskSchema = new mongoose.Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 255,
    },
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
  },
  {
    timestamps: true, // Enable automatic creation and update timestamps
  }
);

// Create a Mongoose model for the Task entity
export const Task = mongoose.model<ITask>('Task', taskSchema);
