const express = require("express");
const router = express.Router();
const { submitForm, getAllCards } = require("../controller/controller");

router.post("/api/cards", submitForm);
router.get("/api/cards", getAllCards);

module.exports = router;