const router = require("express").Router();
const rodeoRoutes = require("./rodeos");

// Book routes
router.use("/rodeos", rodeoRoutes);

module.exports = router;
