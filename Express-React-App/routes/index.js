const router = require("express").Router();
const dataRoutes = require("./api/data");
const usersPostRoutes = require("./api/users");
const usersGetRoutes = require("./api/auth");

// employee routes
router.use("/api", dataRoutes);
router.use("/api", usersPostRoutes);
router.use("/api", usersGetRoutes);

module.exports = router;
