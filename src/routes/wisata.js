const express = require("express");
const wisataController = require("../controllers/wisata.js");
const router = express.Router();

// READ - GET
router.get("/wisata", wisataController.getAllWisata);
router.get("/wisata/:id", wisataController.getWisataById);
router.get("/wisata/all/kota", wisataController.getKota);
router.get("/wisata/all/kategori", wisataController.getKategori);
router.get("/wisata/all/rating", wisataController.getRating);
router.get("/wisata/kategori/:kategori", wisataController.getWisataByKategori);
router.get("/wisata/kota/:kota", wisataController.getWisataByKota);
router.get("/wisata/provinsi/:provinsi", wisataController.getWisataByProvinsi);
router.get("/wisata/rating/:rating", wisataController.getWisataByRating);

// CREATE - POST
router.post("/wisata", wisataController.createWisata);

// Update - Patch
router.patch("/wisata/:id", wisataController.updateWisata);

module.exports = router;
