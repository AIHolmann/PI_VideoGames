const { Router } = require("express");
const getAllVideoGames = require("../controllers/getAllVideoGames");
const getVideogamesByName = require("../controllers/getVideoGamesByName");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", (req, res) => {
  getAllVideoGames(req, res);
  /* const { name } = req.query;
  if (name) {
    getVideogamesByName(req, res);
  } else {
    getAllVideoGames(req, res);
  }*/
});

module.exports = router;
