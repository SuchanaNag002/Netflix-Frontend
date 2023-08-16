import React, { useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import BgImage from "../assets/home.jpg";
import Movielogo from "../assets/homeTitle.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Container } from "../css/HomeCss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
export default function Home() {
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [dispatch,genresLoaded]);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  //console.log(movies)
  return (
    <Container>
      <NavbarHome isScrolled={isScrolled} />
      <div className="hero">
        <img src={BgImage} alt="" className="background-image" />
        <div className="container">
          <div className="logo">
            <img src={Movielogo} alt="" />
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </Container>
  );
}
