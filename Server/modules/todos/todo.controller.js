const TodoModel = require("./todo.model");

// CRUD

const create = (payload) => {
  return TodoModel.create(payload);
};

const list = () => {
  // Complex aggression
  return TodoModel.list(payload);
};

const getById = (id) => {
  return TodoModel.findOne({ _id: id });
};

const updateById = (id, payload) => {
  return TodoModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return TodoModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, remove };
