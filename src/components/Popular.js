import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import food1 from "../images/Kahoots_BiscuitsMaple1_1200x1200.webp";
import food2 from "../images/KahootsWebsite_GFSalmonRecipe30lb_1200x1200.webp";
import food3 from "../images/KahootsWebsite_SweetPotatoChews_1200x1200.webp";

export default function Popular() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="popular-purchases-container">
      <h1>
        Check out some of our <span>pawpular purchases</span>
      </h1>
      <Carousel
        indicators={true}
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
        variant="dark"
      >
        <Carousel.Item className="carousel-item">
          <div className="img-container">
            <img className="carousel-img" src={food1} alt="First slide" />
          </div>

          <Carousel.Caption>
            <h3 className="caption">Maple Bacon Biscuits</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="img-container">
            <img className="carousel-img" src={food2} alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3 className="caption">Grain Free Salmon Recipe</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="img-container">
            <img className="carousel-img" src={food3} alt="Third slide" />
          </div>

          <Carousel.Caption>
            <h3 className="caption">Sweet Potato Chews</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
