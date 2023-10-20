const { Router } = require("express");
const router = Router();

const {getVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle} = require('../controllers/vehicles.controller')

router.route("/")
    .get(getVehicles)
    .post(createVehicle);

router.route("/:id")
    .get(getVehicle)
    .put(updateVehicle)
    .delete(deleteVehicle);

module.exports = router;
