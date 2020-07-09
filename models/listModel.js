const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    item: {
        type: String,
        trim: true,
        required:"is required"
    },
    itemCreated: {
        type: Date,
        default: Date.now
    }
})

const List = mongoose.model("List", ListSchema)
module.exports = List;