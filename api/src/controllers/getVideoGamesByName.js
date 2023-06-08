const axios = require("axios");
const { API_KEY } = process.env;
const URL_BASE = "https://api.rawg.io/api/games";
const { Videogame } = require("../db");
const getAllVideoGames = require("./getAllVideoGames");

const getVideogamesByName = async (req, res, next) => {
  const { name } = req.query;
  if (!name) return next();
  try {
    const gameByNameDb = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ["id", "name", "background_image"],
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const gameByNameApi = await axios(
      `${URL_BASE}?key=${API_KEY}&search=${name}`
    );
    const response = [
      ...gameByNameDb,
      ...gameByNameApi.data.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          genres: game.genres.map((genre) => {
            return {
              name: genre.name,
            };
          }),
        };
      }),
    ].slice(0, 15);

    res.status(200).json(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
