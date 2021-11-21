const Task = require('../models/Task');
const getAllTasks = (req,res) => {
res.send('all Items from the file')
};

const createTask = async (req,res) => {
  const task = await Task.create(req.body);
  // console.log('res',res)
  res.status(201).json({task})
  // res.status(201).json(req.body)
  // res.send('create task')
  // res.json(req.body)
};
const getTask = (req,res) => {
   // res.send('get single task')
   res.json({id:req.params.id});
};
const updateTask = (req,res) => {
  res.send('update task')
};
const deleteTask = (req,res) => {
  res.send('delete task')
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
