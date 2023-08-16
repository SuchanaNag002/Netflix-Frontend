import React from "react";
import { Container } from "../css/PlayerCss";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
import "../css/PlayerCss";
import {useNavigate} from "react-router-dom"
export default function Player() {
    const navigate = useNavigate()
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={()=>navigate(-1)}/>
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
}
