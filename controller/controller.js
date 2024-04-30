let model = require('../model/model');

const createCat = (req, res) => {
    let cat = req.body;
    console.log(cat)
    model.insertCat(cat, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Cat successfully added.' });
        }
    });
}
const getAllCats = (req, res) => {
    model.getAllCats((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Success.' });
        }
    });
}

const deleteCat = (req, res) => {
    let cat = req.body;
    model.remove(cat, (err, result) => {
        console.log(err)
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Cat removed.' });
        }
    });
}

module.exports = { createCat, getAllCats, deleteCat };