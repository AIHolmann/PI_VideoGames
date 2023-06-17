import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postVideogame, getGenre } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const CreateGame = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenre());
  }, []);
  const genres = useSelector((state) => state.genres);

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
    console.log(input);
    dispatch(postVideogame(input));
    alert("Personaje creado");
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
            </div>
            <div>
              <label htmlFor="">Description:</label>
              <textarea
                type="text"
                value={input.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Platforms:</label>
              <input
                type="text"
                value={input.platforms}
                name="platforms"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Release date:</label>
              <input
                type="date"
                value={input.date}
                name="date"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Rating:</label>
              <input
                type="number"
                value={input.rating}
                name="rating"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="">Genres:</label>
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
            </div>
            <button type="submit">Create!</button>
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
