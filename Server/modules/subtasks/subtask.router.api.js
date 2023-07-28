const router = require("express").Router();
const subtaskController = require("./subtask.controller");

//Read
router.get("/", async (req, res) => {
  const results = await subtaskController.list();
  res.send("TODO API running");
});

// Create
router.post("/", async (req, res) => {
  const todoResult = await subtaskController.create(req.body);
  res.json({ data: todoResult });
});

//read by id
router.get("/:id", async (req, res) => {
  const results = await subtaskController.getById(req.params.id);
  res.json({ data: results });
});

// update By Id
router.put("/:id", async (req, res) => {
  const results = await subtaskController.updateById(req.params.id);
  res.json({ data: results });
});
router.delete("/:id", async (req, res) => {
  const results = await subtaskController.remove(req.params.id);
  res.json({ data: results });
});

module.exports = router;
