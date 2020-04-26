const router = require("express").Router();
const homeController = require("../controllers/ControlHomeRoutes");

// Get and POST request will be made here

router.get("/", homeController.controlHome);
router.get("/visualization", homeController.controlVisualization);
router.get("/coronavirus_info", homeController.controlCoronavirus_info)

module.exports = router;
