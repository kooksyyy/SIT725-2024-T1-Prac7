const { getAllCats, postCat } = require("../model/model");

const submitForm = async (req, res) => {
  try {
    await postCat(req.body);
    const cats = await getAllCats();
    res.json(cats);
  } catch (err) {
    console.error("Error submitting form:", err);
    res.status(500).json({ message: "Error submitting form" });
  }
};

const getAllCards = async (req, res) => {
  try {
    const cards = await getAllCats();
    res.json(cards);
  } catch (err) {
    console.error("Error getting cards:", err);
    res.status(500).json({ message: "Error getting cards" });
  }
};

module.exports = { submitForm, getAllCards };