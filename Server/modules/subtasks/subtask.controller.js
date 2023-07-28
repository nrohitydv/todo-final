const SubtaskModel = require("./subtask.model");

// CRUD

const create = (payload) => {
  return SubtaskModel.create(payload);
};

const list = (payload) => {};

const getById = (id) => {};

const updateById = (id, payload) => {};

const remove = (id) => {};

module.exports = { create, list, getById, updateById, remove };
