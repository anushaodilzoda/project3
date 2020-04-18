const router = require("express").Router();
const dataController = require("../controllers/dataController");


//Matches with "/api"
router.route("/newQuestion")
  .post(dataController.create);

//   // Matches with "/api/search/:keyword"
//   router
//   .route("/:keyword")
//   .get(employeesController.findByName)
  
// // Matches with "/api/employees"
// router.route("/")
//   .get(employeesController.findAll)
//   .post(employeesController.create);

// // Matches with "/api/employees/:id"
// router
//   .route("/:id")
//   .get(employeesController.findById)
//   .put(employeesController.update)
//   .delete(employeesController.remove);



module.exports = router;
