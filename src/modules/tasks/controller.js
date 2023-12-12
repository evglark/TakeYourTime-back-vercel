const Task = require('../../models/task');

class TaskController {
	constructor() {
		this.taskSchema = Object.keys(Task.schema.obj);
	}

	async getTasks(req, res) {
		try {
			const { page = 1, limit = 10, search } = req.query;
			const searchRegex = RegExp(`${search}`, 'i');
			const filter = search
				? { $or: [{ title: { $regex: searchRegex } }, { description: { $regex: searchRegex } }] }
				: null;

			const count = await Task.countDocuments(filter);
			const tasks = await Task.find(filter, null, { skip: (page - 1) * limit, limit });

			res.json({ count, page: Number(page), limit: Number(limit), tasks });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}

	async getTaskById(req, res) {
		try {
			const _id = req.params.id;
			const task = await Task.findById(_id);

			res.json({ task });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}

	async updateTaskById(req, res) {
		try {
			const _id = req.params.id;
			const newTask = this.pick(req.body, this.taskSchema);
			const task = await Task.findByIdAndUpdate(_id, newTask);
			const updatedTask = await task.save();

			res.json({ updatedTask });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}

	async deleteTaskById(req, res) {
		try {
			const _id = req.params.id;
			const deletedTask = await Task.findByIdAndDelete(_id);

			res.json({ deletedTask });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}

	async createNewTask(req, res) {
		try {
			const newTask = this.pick(req.body, this.taskSchema);
			const task = await Task.create(newTask);

			res.json({ task });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}
}

module.exports = TaskController;
