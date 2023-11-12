exports.getAllTasks = (req, res) => {
  res.send("all items here");
};

exports.createTask = (req, res) => {
  res.json(req.body);
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
