import { useEffect } from "react";

import Slide from "./slide";

import "./hero-slider.css";
import Slider from "./script";

const HeroSlider = ({ slides }) => {
  useEffect(() => {
    Slider();
  }, []);

  return (
    <div className="herosection overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-96 mb-1">
      <Slide slides={slides}></Slide>
      <button className="heroslider__btn slider__btn--left opacity-75">
        &larr;
      </button>
      <button className="heroslider__btn slider__btn--right opacity-75">
        &rarr;
      </button>
      <div className="dots"></div>
    </div>
  );
};

export default HeroSlider;
