import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true},
  password: { type: String, required: true},
});

const User = mongoose.model('User', usersSchema);

export default User;