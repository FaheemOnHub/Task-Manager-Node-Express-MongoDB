const Task = require("../models/Task");
const { asyncWrapper } = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); //get all docs
  res.status(200).json({ tasks });
  // .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

// exports.createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// exports.getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });

//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

exports.getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

// exports.updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     }
//     res.status(200).json({ id: taskID, data: req.body });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

exports.updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// exports.deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
