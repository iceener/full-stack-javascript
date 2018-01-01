const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;