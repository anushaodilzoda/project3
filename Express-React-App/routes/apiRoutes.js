const router = require("express").Router();
const db = require("../models");

router.post("/api/newQuestion", (req, res) =>{
  db.Data
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});
  

module.exports = router;

// router.get("/recipes", (req, res) => {
//   // Use a regular expression to search titles for req.query.q
//   // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.Recipe.find({
//     title: { $regex: new RegExp(req.query.q, 'i')}
//   })
//     .then(recipes => res.json(recipes))
//     .catch(err => res.status(422).end());
// });