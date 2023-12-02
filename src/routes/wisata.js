const express = require("express");
const wisataController = require("../controllers/wisata.js");
const router = express.Router();

// READ - GET
router.get("/wisata", wisataController.getAllWisata);
// router.get("/wisata/:kategori", wisataController.getWisataByKategori);
// router.get("/wisata/:kota", wisataController.getWisataByKota);
// router.get("/wisata/:provinsi", wisataController.getWisataByProvinsi);
// router.get("/wisata/:rating", wisataController.getWisataByRating);

// CREATE - POST
router.post("/wisata", wisataController.createWisata);

module.exports = router;