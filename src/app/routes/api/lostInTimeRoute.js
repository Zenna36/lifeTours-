const express = require("express");
const router = express.Router();
const dao = require("../../daos/api/lostInTimeDao");

router.get("/", (req, res) => {
    dao.findAll(res, 'lostInTime')
})

router.get("/count", (req, res) => {
    dao.countAll(res, 'lostInTime')
});

router.get("/:id", (req, res) => {
    dao.findById(res, 'lostInTime', req.params.id)
});

router.post("/create", (req, res) => {
    dao.create(req, res)
});

router.patch("/update/:id", (req, res) => {
    dao.update(req, res)
});

module.exports = router;