const router = require("express").Router();
const subtaskController = require("./subtask.controller")

router.get("/",(req, res)=>{
    res.send("Heluuuuu! Mah subtask baata api boleko!")
});

router.post("/", async (req,res) => {
    const result = await subtaskController.create(req.body);
    res.json({data: result});
});


module.exports = router;