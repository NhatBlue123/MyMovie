import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieProvider";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const MovieSearch = ({ title }) => {
  const { movieSearch,setMovieSearch, handleDetail, handleSearch } = useContext(MovieContext);
  const navigate = useNavigate();
  useEffect(() => {
    const savedResults = localStorage.getItem("movieSearchResults");
    if (savedResults) {
      setMovieSearch(JSON.parse(savedResults));
    }
  }, [setMovieSearch]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="text-white p-10 mb-10">
        <h2 className="uppercase text-xl mb-4">{title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {movieSearch &&
            movieSearch.map((item) => (
              <div
                key={item.id}
                className="w-[200px] h-[300px] relative group"
                onClick={() => {
                  handleDetail(item.id);
                  navigate(`/${item.original_title}/detail`);
                }}
              >
                <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-2 ">
                    <p className="uppercase text-md">{item.title || item.original_title}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MovieSearch;
