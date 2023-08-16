import React, { useRef, useState } from "react";
import Card from "./Card";
import { Container } from "../css/CardSliderCss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default React.memo(function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };
  return (
    <Container
      className="flex column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="flex slider" ref={listRef}>
          {data && data.map((movie, index) => {
            return (
              <div key={movie.id}>
                <Card movieData={movie} index={index} key={movie.id} />
              </div>
            );
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});
