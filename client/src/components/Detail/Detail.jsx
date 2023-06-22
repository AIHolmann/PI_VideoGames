import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions/index";
import { useEffect } from "react";
import loading from "../../assets/imagenes-gif/Mario-loading-8bits.gif";
import style from "./detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const detail = useSelector((state) => state.detail);

  return (
    <div className={style.container}>
      {detail.id == id ? (
        <div className={style.contall}>
          <div className={style.innercont}>
            <h1 className={style.name}>{detail?.name}</h1>
            <h2>Description:</h2>
            <div className={style.description}>
              {isNaN(id) ? (
                <p>{detail.description}</p>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: detail?.description }}
                ></div>
              )}
            </div>
            <h2>Rating: {detail.rating}</h2>
            <h2>Release Date: {detail.date}</h2>
            <div className={style.lowerinfo}>
              <h2>Platforms:</h2>
              <ul>
                {isNaN(id)
                  ? detail?.platforms?.split(" ").map((el, i) => {
                      return <li key={i}>{el}</li>;
                    })
                  : detail.platforms.map((el, i) => {
                      return <li key={i}>{el}</li>;
                    })}
              </ul>
              <h2>Genres:</h2>
              <ul>
                {isNaN(id)
                  ? detail.genres.map((el, i) => {
                      return <li key={i}>{el.name}</li>;
                    })
                  : detail.genres.map((el, i) => {
                      return <li key={i}>{el}</li>;
                    })}
              </ul>
              <div>
                <p>Stock: {detail?.stock}</p>
              </div>
            </div>
            <Link to="/home" className={style.link}>
              Home
            </Link>
          </div>
          <div className={style.rigth}>
            <img src={detail?.image} alt="" className={style.img} />
          </div>
        </div>
      ) : (
        <div>
          <h2>Loading...</h2>
          <img
            src={loading}
            alt="It's me! Mario!"
            width={"400px"}
            height={"600px"}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
