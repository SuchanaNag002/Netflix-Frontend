import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig";
import BgImage from "../components/BgImage";
import { Container } from "../css/SignupCss";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  async function handleSignIn() {
    try {
      const { email, password } = formVal;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      if (errorCode === "auth/email-already-in-use") {
        setErrorMessage("User with this email id already exists. Please login");
      } else if (errorCode === "auth/weak-password") {
        setErrorMessage(
          "Weak password. Password should be at least 6 characters"
        );
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
    <Container showPassword={showPassword}>
      <BgImage />
      <div className="content">
        <Navbar login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h2>Unlimited Movies and Shows</h2>
            <h4>Watch Movies, TV Shows and more</h4>
            <h6>Enter your email to start your membership</h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formVal.email}
              onChange={(e) =>
                setFormVal({ ...formVal, [e.target.name]: e.target.value })
              }
              autosomplete="off"
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formVal.password}
                onChange={(e) =>
                  setFormVal({ ...formVal, [e.target.name]: e.target.value })
                }
                autocomplete="off"
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </Container>
  );
}
