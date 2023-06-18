import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postVideogame, getGenre } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate";

const CreateGame = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenre());
  }, []);
  const genres = useSelector((state) => state.genres);

  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    genres: [],
    description: "",
    platforms: "",
    date: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(error);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    } else {
      const update = input.genres.filter((item) => item !== e.target.value);
      setInput({
        ...input,
        genres: update,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postVideogame(input));
    alert("Personaje creado");
    console.log("Soy del DISPATCH       ", input);

    setInput({
      name: "",
      image: "",
      genres: [],
      description: "",
      platforms: "",
      date: "",
      rating: 0,
    });
  };

  const isFormValid =
    input.name.trim() !== "" &&
    input.image.trim() !== "" &&
    input.genres.length > 0 &&
    input.description.trim() !== "" &&
    input.platforms.trim() !== "" &&
    input.date.trim() !== "" &&
    input.rating >= 0;
  /*
  const disabledB = () => {
    if (Object.keys(error).length === 0) {
      cambiarCondicion();
    }
  };*/
  return (
    <div>
      <div>
        <Link to="/home">Go back!</Link>
        <h1>Create your own videogame!</h1>
      </div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              {error.name && <p>{error.name}</p>}
            </div>
            <div>
              <label htmlFor="">Image:</label>
              <input
                type="text"
                value={input.image}
                name="image"
                placeholder="Insert the link of your image"
                onChange={handleChange}
              />
              {error.image && <p>{error.image}</p>}
            </div>
            <div>
              <label htmlFor="">Description:</label>
              <textarea
                type="text"
                value={input.description}
                name="description"
                onChange={handleChange}
              />
              {error.description && <p>{error.description}</p>}
            </div>
            <div>
              <label htmlFor="">Platforms:</label>
              <input
                type="text"
                value={input.platforms}
                name="platforms"
                onChange={handleChange}
              />
              {error.platforms && <p>{error.platforms}</p>}
            </div>
            <div>
              <label htmlFor="">Release date:</label>
              <input
                type="date"
                value={input.date}
                name="date"
                onChange={handleChange}
              />
              {error.date && <p>{error.date}</p>}
            </div>

            <div>
              <label htmlFor="">Genres:</label>
              <p>Please select at least one genre:</p>
              {genres.map((genre, i) => {
                return (
                  <label key={i}>
                    <input
                      type="checkbox"
                      value={`${genre.name}`}
                      name={`${genre.name}`}
                      onChange={handleCheck}
                    />
                    {`${genre.name}`}
                  </label>
                );
              })}
              {error.genres && <p>{error.genres}</p>}
            </div>
            <div>
              <label htmlFor="">Rating:</label>
              <input
                type="number"
                value={input.rating}
                name="rating"
                onChange={handleChange}
              />
              {error.rating && <p>{error.rating}</p>}
            </div>
            <button type="submit" id="submit" disabled={!isFormValid}>
              Create!
            </button>
          </form>
        </div>
        <div>
          <span>
            *** Mostrar como va a ir quedando la card del videogame ***
          </span>

          <p>Your genres: {input.genres.map((el) => el + ", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
