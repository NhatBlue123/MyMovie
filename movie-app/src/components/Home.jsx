import { useState, useEffect, useContext } from "react";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import MovieList from "./MovieList.jsx";
import { MovieContext } from "../context/MovieProvider";

function Home() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const { handleSearch } = useContext(MovieContext);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 = "https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1";
      const url2 = "https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1";

      const [res1, res2] = await Promise.all([fetch(url1, options), fetch(url2, options)]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <div className="bg-black pb-10">
      <Header onSearch={handleSearch} />
      <Banner />
      <div>
        <MovieList title={"Phim Hot"} data={movie} />
        <MovieList title={"Phim đề xuất"} data={movieRate} />
      </div>
      <div>
        <p>Liên Hệ Bản Quyền: nguyennhat082004@gmail.com</p>
      </div>
    </div>
  );
}

export default Home;
