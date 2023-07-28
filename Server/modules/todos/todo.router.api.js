const router = require("express").Router();
const { json } = require("express");
const todoController = require("./todo.controller");

//Read
router.get("/", async (req, res) => {
  const results = await todoController.list();
  res.send("TODO API running");
});

// Create
router.post("/", async (req, res) => {
  const todoResult = await todoController.create(req.body);
  res.json({ data: todoResult });
});

//read by id
router.get("/:id", async (req, res) => {
  const results = await todoController.getById(req.params.id);
  res.json({ data: results });
});

// update By Id
router.put("/:id", async (req, res) => {
  const results = await todoController.updateById(req.params.id);
  res.json({ data: results });
});
router.delete("/:id", async (req, res) => {
  const results = await todoController.remove(req.params.id);
  res.json({ data: results });
});

// remove

module.exports = router;
