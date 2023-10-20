const { Router } = require("express");
const router = Router();

const {getAllAccess, getAccess, createAccess, updateAccess, deleteAccess} = require('../controllers/access.controller')

router.route("/")
    .get(getAllAccess)
    .post(createAccess)

router.route('/:id')
    .get(getAccess)
    .put(updateAccess)
    .delete(deleteAccess)

module.exports = router;
