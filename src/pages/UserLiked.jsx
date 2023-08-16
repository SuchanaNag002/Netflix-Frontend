import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserLikedMovies } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig";
import { Container } from "../css/UserLikedCss";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import Card from "../components/Card";

export default function UserLiked() {
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
  });
  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email));
    }
  }, [dispatch, email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NavbarHome isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {movies?.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
