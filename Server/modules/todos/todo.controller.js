const TodoModel = require("./todo.model");

// CRUD

const create = (payload) => {
    return TodoModel.create(payload);
};

const list = (payload) => {};

const getById = (id) => {};

const updateById = (id, payload) => {};

const remove = (id) => {};

module.exports = { create, list, getById, updateById, remove};