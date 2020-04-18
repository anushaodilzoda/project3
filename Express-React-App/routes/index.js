const router = require("express").Router();
const dataRoutes = require("./data");

// employee routes
router.use("/api", dataRoutes);

module.exports = router;
