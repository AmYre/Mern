const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: Number,
    title : String,
    desc : String
})

module.exports = mongoose.model('Posts', PostSchema)