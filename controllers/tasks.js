const Task = require('../models/Task');
const getAllTasks = async (req,res) => {
// res.send('all Items from the file')
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks})
    // res.status(200).json({status:'success',data: {tasks, nbHits: tasks.length}})
  } catch (error) {
    res.status(500).json({msq: error})
  }
};

const createTask = async (req,res) => {
  try {
    const task = await Task.create(req.body);
    // console.log('res',res)
    res.status(201).json({task})
    // res.status(201).json(req.body)
    // res.send('create task')
    // res.json(req.body)
  } catch (error) {
    res.status(500).json({msq: error})
  }

};
const getTask = async (req,res) => {
  try {
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id: taskID})
if(!task) {
  return res.status(404).json({msq: `No task with id: ${taskID}`})
}

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msq: error})
  }
   // res.send('get single task')
   // res.json({id:req.params.id});
};


const deleteTask = async (req,res) => {
  try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});

    if(!task) {
      return res.status(404).json({msq: `No task with id: ${taskID}`})
    }
    // res.status(200).json({task})
    // res.status(200).send()
    res.status(200).json({task: null, status: 'success'})
  } catch (error) {
    res.status(500).json({msq: error})
  }
};

const updateTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;

    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
      new: true, runValidators: true
    })

    if (!task) {
      return res.status(404).json({msq: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msq: error})
  }
};

const editTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;

    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
      new: true, runValidators: true,overwrite:true
    })

    if (!task) {
      return res.status(404).json({msq: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msq: error})
  }
};


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask
};
