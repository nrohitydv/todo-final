const router = require("express").Router();

const toDoRouter = require("../modules/todos/todo.router.api");
const subTaskRouter = require("../modules/subtasks/subtask.router.api");

router.use("/todos",toDoRouter);
router.use("/subtasks",subTaskRouter);

module.exports = router;
