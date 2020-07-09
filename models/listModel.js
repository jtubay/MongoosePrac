const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required:"is required"
    },
    itemCreated: {
        type: Date,
        default: Date.now
    }
})

const Items = mongoose.model("Items", ItemsSchema)
module.exports = Items;