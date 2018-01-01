const Comment = require('../models/Comment');

// list comments
module.exports.index = async (req, res) => {
    const comments = await Comment.find({});

    res.json({ comments });
};

// save new comment
module.exports.store = async (req, res) => {
    const comment = await saveComment(req.body.name, req.body.content);

    res.json({
        message: 'Comment saved!',
        comment
    });
};

function saveComment(name, content) {
    return new Comment({ name, content }).save();
}