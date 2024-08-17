import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import MovieSearch from "./MovieSearch";

const MovieDetail = () => {
  const { movieDetail,setSlug } = useContext(MovieContext);
  const { handleSearch } =
    useContext(MovieContext);
  const navigate = useNavigate();

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  const {
    title,
    original_title,
    poster_path,
    overview,
    release_date,
    runtime,
    production_companies,
    production_countries,
    genres,
    vote_average,
    actors,
  } = movieDetail;
  setSlug(title);

  // Extract genre names from the genres array
  const genreNames = genres
    ? genres.map((genre) => genre.name).join(", ")
    : "N/A";

  return (
    <div className="bg-black pb-10">
      <Header onSearch={handleSearch} />
        <div className="flex items-center w-full h-[900px] text-black bg-black">
          <div className="h-full w-[1000px] ml-[180px]">
            <img
              src={`${import.meta.env.VITE_IMG_URL}${poster_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white ml-[35px]">
            <div className="text-gray-500">
              <nav>
                <Link to="/home" className="hover:text-yellow-400 mr-5">
                  Home
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="hover:text-yellow-400"
                >
                  Back
                </button>
              </nav>
            </div>
            <div className="mb-4">
              <p className="text-[50px] text-orange-500">{title}</p>
              <p className="text-[30px]">{original_title}</p>
              <nav>
                <button className="text-gray-500 mr-9">Like</button>
                <button className="text-gray-500 mr-9">Share</button>
                <button className="text-gray-500">Report</button>
              </nav>
            </div>
            <div className="mb-4">
              <button className="w-[130px] h-[40px] border-2 text-yellow-400 border-yellow-400 rounded-[6px] hover:text-white hover:border-white">
                Play
              </button>
            </div>
            <div className="mb-4">
              <p>Descriptions</p>
              <p>{overview}</p>
            </div>
            <div className="flex">
              <div>
                <p>Release Date: {release_date}</p>
                <p>Runtime: {runtime} minutes</p>
                <p>Director: {production_companies[0].name}</p>
                <p>Country: {production_countries[0].name}</p>
                <p>Genres: {genreNames}</p>
                <p>Rating: {vote_average}</p>
              </div>
              <div className="w-[390px]">
                <p>Actors: {actors ? actors.join(", ") : "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MovieDetail;
