import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String
}); 

const Task = mongoose.model('Task', taskSchema);

export default Task;