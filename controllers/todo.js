// controllers/todo.js

const Todo = require('../models/todo')

exports.all = all
exports.find = find
exports.findByStatus = findByStatus
exports.create = create
exports.update = update
exports.remove = remove

function all(req, res) {
    let promise = Todo.all()

    promise.then(
        (data) => {
            // Success
            res.json(data)
        },
        () => {
            res.json({ error: "Error happened" })
        })
}

function find(req, res) {
    Todo.find(req.params.id).then(
        (task) => {
            if (null === task) {
                res.status(404)
                res.json({ message: 'Task not found' })
            }
            res.json(task)
        },
        (err) => {
            res.status(500)
            res.json(err)
        }
    )
}

function findByStatus(req, res) {
    Todo.findByStatus(req.params.status).then(
        (task) => {
            if (null === task) {
                res.status(404)
                res.json({ message: req.params.status + 'task not found' })
            }
            console.log(task)
            res.json(task)
        },
        (err) => {
            res.status(500)
            res.json(err)
        }
    )
}

function create(req, res) {
    Todo.create(req.body).then(
        () => {
            res.status(201)
            res.json({message: 'Task created'})
        },
        (err) => {
            res.status(500)
            res.json(err)
        }
    )
}

function update(req, res) {
    Todo.update(req.params.id, req.body).then(
        (data) => {
            res.json({ message : "Task updated"})
        },
        (err) => {
            res.status(500)
            res.json(err)
        }
    )
}

function remove(req, res) {
    Todo.remove(req.params.id).then(
        () => {
            res.json({ message : "Task deleted"})
        },
        (err) => {
            res.status(500)
            res.json(err)
        }
    )
}