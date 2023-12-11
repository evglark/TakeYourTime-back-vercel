const { Router } = require('express');

const TasksController = require('./controller');

const tasksRouter = new Router();
const tasksController = new TasksController();

tasksRouter
	.get('/tasks', tasksController.getTasks)
	.get('/tasks/:id', tasksController.getTaskById)
	.put('/tasks/:id', tasksController.updateTaskById)
	.patch('/tasks/:id', tasksController.updateTaskById)
	.delete('/tasks/:id', tasksController.deleteTaskById)
	.post('/tasks/create', tasksController.createNewTask);

module.exports = tasksRouter;
