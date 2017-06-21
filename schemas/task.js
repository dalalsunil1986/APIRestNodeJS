// schemas/task.js

exports.schema = new mongoose.Schema({
    title: {
        type: String,
        length: 200
    },
    description: String,
    created: Date,
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'complete'],
        default: 'pending'
    }
})