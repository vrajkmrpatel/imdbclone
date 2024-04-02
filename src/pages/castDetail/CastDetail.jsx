import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./castDetails.css";

const CastDetail = () => {
  const [castList, setCastList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63`
    )
      //fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cast);
        setCastList(data.cast.slice(0, 16));
      });
  };

  return (
    <div className="cast__details text-white p-2 ">
      <h2 className="text-3xl">Cast</h2>
      <div className="cast-container">
        {castList.map((actor) => (
          <div className="cast-item" key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastDetail;

// hello there
