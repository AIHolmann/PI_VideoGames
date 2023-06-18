const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL_BASE } = process.env;
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const getVideogamesByID = async (req, res) => {
  try {
    const { id } = req.params;

    let { data } = await axios(`${URL_BASE}/${id}?key=${API_KEY}`);

    let response = {
      id: data.id,
      name: data.name,
      image: data.background_image,
      description: data.description,
      platforms: data.parent_platforms.map((plat) => plat.platform.name),
      date: data.released,
      rating: data.rating,
      genres: data.genres.map((genre) => genre.name),
    };

    const noContent = `No hay coincidencias al id: '${id}'`;
    if (response) {
      return res.status(200).json(response);
    }

    let gameByIdDb = await Videogame.findOne({
      where: {
        id: id,
      },
      attributes: [
        "id",
        "name",
        "image",

        "description",
        "platforms",
        "date",
        "rating",
      ],
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
    if (gameByIdDb) {
      return res.status(200).json(gameByIdDb);
    }

    if (!gameByIdDb && !response) {
      return res.status(404).json(noContent);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = getVideogamesByID;
