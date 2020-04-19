const router = require("express").Router();
const dataController = require("../controllers/dataController");


//Matches with "/api/Question"
router.route("/Question")
  .post(dataController.create);

  ////Matches with "/api/Topic"
router.route("/Topic")
  .get(dataController.getTopics)
  .post(dataController.createTopic);

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
