import React, { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig";
import BgImage from "../components/BgImage";
import { Container } from "../css/LoginCss";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      if (errorCode === "auth/user-not-found") {
        setErrorMessage("User not found. Please sign in.");
      } else if (errorCode === "auth/wrong-password") {
        setErrorMessage("Wrong password. Please check your password.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }

      console.log(`Firebase Error Code: ${errorCode}`, errorMessage);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });
  return (
    <Container>
      <BgImage />
      <div className="content">
        <Navbar />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
