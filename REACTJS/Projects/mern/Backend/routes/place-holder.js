const express = require("express");

const bodyParser = require("body-parser");

const router = express.Router();

const Placecontroller = require("../controllers/places-controller");

router.post("/products", Placecontroller.createProduct);
// router.get("/user/:uid", Placecontroller.getPlcaesByUserId);

// router.get("/:pid");

// router.post("/");

// router.patch("/:pid");

// router.delete("/:pid");

module.exports = router;
