const Task = require("../models/Task");
exports.getAllTasks = (req, res) => {
  res.send("all items here");
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.send("Validation Error");
  }
};

exports.getTask = (req, res) => {
  res.json({ id: req.params.id });
};

exports.updateTask = (req, res) => {
  res.send("updating a task");
};

exports.deleteTask = (req, res) => {
  res.send("deleting a task");
};
