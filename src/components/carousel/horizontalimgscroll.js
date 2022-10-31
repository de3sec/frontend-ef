import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./horizontalimg.css";

const Horizontalimgscroll = (props) => {
  const { imgs } = props;
  const imgsrow = imgs?.map((img) => {
    return (
      <>
        <img className="object-cover" src={img.url} alt="" />
      </>
    );
  });
  return (
    <div className="imgwrapper">
      <Carousel infiniteLoop swipeable={true}>
        {imgsrow}
      </Carousel>
    </div>
  );
};
export default Horizontalimgscroll;
