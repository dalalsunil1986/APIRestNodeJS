// models/todo.js

const taskSchema = require('../schemas/task')
const Task = mongoose.model('Task', taskSchema.schema)

exports.all = all
exports.find = find
exports.findByStatus = findByStatus
exports.create = create
exports.update = update
exports.remove = remove

function all() {
    return Task.find({}, {"__v" : 0}).sort({ date: -1 }).exec()
}

function find(id) {
    return Task.findById(id, {"__v" : 0})
}

function findByStatus(status) {
    return Task.find({"status": status}, {"__v": 0}).sort({ date: -1}).exec()
}

function create(data) {
    let task = new Task()
    task.title = data.title
    task.description = data.description
    task.created = new Date()

    return task.save()
}

function update(id, data) {
    let promise = find(id)
    
    promise.then(
        (task) => {
            // success
            if (task === null) {
                return null
            }
            task.title = data.title
            task.description = data.description
            task.status = data.status

            return task.save()
        }
    )
    return promise
}

function remove(id) {
    return Task.findByIdAndRemove(id)
}
