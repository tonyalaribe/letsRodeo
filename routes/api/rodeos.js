const router = require("express").Router();
const rodeosController = require("../../controllers/rodeosController");

// Matches with "/api/books"
router.route("/")
  .get(rodeosController.findAll)
  .post(rodeosController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(rodeosController.findById)
  .put(rodeosController.update)
  .delete(rodeosController.remove);

module.exports = router;
