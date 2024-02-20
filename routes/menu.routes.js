const express = require('express');
const router = express.Router();

const productController = require('../controllers/menu')

router.get("/detalle/:id", productController.detail)

module.exports = router;