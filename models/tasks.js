const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    entry: {
        title: String,
        completed: Boolean
    },
    status: {
        type: String,
        required: true,
        default: 'TO-DO',
        enum: ['TO-DO', 'COMPLETED']
    }
})

module.exports = mongoose.model('Task', taskSchema);