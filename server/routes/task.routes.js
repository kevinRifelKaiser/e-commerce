import express from "express";
import Task from "../models/tasks.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description, done: 0 });
  await task.save();
  res.json({ status: "Task correctly saved on DB" });
});

router.put("/:id", async (req, res) => {
  const { title, description, done } = req.body;
  const updateTask = { title, description, done };
  await Task.findByIdAndUpdate(req.params.id, updateTask);
  res.json({ status: "Task correctly updated on DB" });
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ status: "Task correctly deleted" });
});

export default router;
