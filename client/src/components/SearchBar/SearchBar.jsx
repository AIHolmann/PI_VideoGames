import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../../redux/actions";
import style from "./searchbar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleImputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameVideogames(name));
    setName("");
  };

  return (
    <div className={style.container}>
      <label htmlFor="" className={style.label}>
        🔎
      </label>
      <input
        type="text"
        placeholder="Write here"
        value={name}
        onChange={handleImputChange}
        className={style.input}
      />
      <button type="submit" onClick={handleSubmit} className={style.buton}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
