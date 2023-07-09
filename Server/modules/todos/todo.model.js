const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: { type: String, required: true},
    status: { type: String, enums:["pending", "complete"], default: "pending"},
    // todo: { type: isObjectIdOrHexString, ref: "Todo"}, // Reference to ToDo model
});

module.exports = mongoose.model("todo", todoSchema);