const express = require("express");
const router = express.Router();

const {
    getLivres,
    getLivresEmpruntesByEmail
} = require("../controllers/livresController");

// 📚 livres disponibles
router.get("/", getLivres);
/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupérer tous les livres
 *     responses:
 *       200:
 *         description: Liste des livres
 */

// 👤 emprunts par email
router.get("/emprunts", getLivresEmpruntesByEmail);
/**
 * @swagger
 * /api/emprunts:
 *   get:
 *     summary: Récupérer les emprunts d'un utilisateur
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *     responses:
 *       200:
 *         description: Liste des emprunts
 */

module.exports = router;
