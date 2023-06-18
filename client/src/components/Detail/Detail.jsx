import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions/index";
import { useEffect } from "react";
import loading from "../../assets/imagenes-gif/Mario-loading-8bits.gif";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  const detail = useSelector((state) => state.detail);
  console.log(detail);

  return (
    <div>
      {detail.id == id ? (
        <div>
          <div>
            <h1>{detail?.name}</h1>
            <h2>Description:</h2>
            <div
              dangerouslySetInnerHTML={{ __html: detail?.description }}
            ></div>
            <h2>Rating: {detail.rating}</h2>
            <h2>Release Date: {detail.date}</h2>
            <h2>Platforms:</h2>
            <ul>
              {detail?.platforms?.map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
            <h2>Genres:</h2>
            <ul>
              {detail?.genres?.map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <img src={detail?.image} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <h2>Loading...</h2>
          <img src={loading} alt="It's me! Mario!" />
        </div>
      )}
    </div>
  );
};

export default Detail;
