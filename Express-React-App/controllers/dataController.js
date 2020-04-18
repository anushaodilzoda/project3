const db = require("../models");

// Defining methods for the employeesController
module.exports = {
  create: function(req, res) {
    console.log("in the server");
    console.log(req.body);
    db.Data.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  // findAll: function(req, res) {
  //   db.Employee.find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Employee.findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // findByName: function(req, res) {
  //   var value = { $regex: req.params.keyword, $options: "i" };

  //   db.Employee.find({
  //     $or: [
  //       { id: value },
  //       { firstName: value },
  //       { lastName: value },
  //       { role: value },
  //       { department: value }
  //     ]
  //   })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // create: function(req, res) {
  //   db.Employee.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Employee.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Employee.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
