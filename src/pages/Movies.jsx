import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig";
import { Container } from "../css/MoviesCss";
import NavbarHome from "../components/NavbarHome";
import NotAvailable from "../components/NotAvailable";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";
export default function Movies() {
  //const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  useEffect(() => {
    console.log(genresLoaded);
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "movies" }));
    }
  }, [dispatch, genresLoaded]);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) {
    //   navigate("/");
    // }
  });
  return (
    <Container>
      <div className="navbar">
        <NavbarHome isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies && movies.length > 0 ? (
          <Slider movies={movies} />
        ) : (
          <NotAvailable />
        )}
      </div>
    </Container>
  );
}
