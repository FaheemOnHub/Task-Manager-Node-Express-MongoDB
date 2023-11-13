const Task = require("../models/Task");
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //get all docs
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.updateTask = (req, res) => {
  res.send("updating a task");
};

exports.deleteTask = (req, res) => {
  res.send("deleting a task");
};
