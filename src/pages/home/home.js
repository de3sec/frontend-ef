import React from "react";
import Hero from "../../components/Slider/hero";
import Testimonials from "../../components/Testimonial/testimonial";
import Footer from "../../components/Footer/Footer";
import Recommended from "../../components/HomeSections/Recommended";
import OurPicks from "../../components/HomeSections/OurPicks";
import { ProductWrapper } from "../../components/Product/ProductWrapper";
// import { ProductSlider }   from "../../components/Product/ProductSlider";
// import { Product } from "../../components/Product/Product";
import Slider from "../../components/carousel/carousel";
import "react-toastify/dist/ReactToastify.css";
import ProductHorizontalView from "../../components/Product/ProductCarousel/ProductHorizontalView";

const Home = () => {
  const slideData = [
    {
      index: 0,
      headline: "Oral Care",
      button: "Shop now",
      href: "/shop/homewellness",
      src: "https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      index: 1,
      headline: "Bamboo products",
      button: "Explore",
      href: "/shop/personalcare",
      src: "https://images.unsplash.com/photo-1519056230453-a120bf859c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
      index: 2,
      headline: "Decor",
      button: "Shop now",
      href: "/shop/decor",
      src: "https://images.unsplash.com/photo-1632142334452-7efccdbf9a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
  ];
  return (
    <div>
      {/* <Hero /> */}

      <div id="default-carousel" className="relative" data-carousel="static">
        <Hero />
      </div>

      {/* Product Slider */}
      <ProductHorizontalView />

      <div className="mx-5 my-3 justify-items-center lg:relative lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full lg:flex-grow-1 overflow-x-hidden">
        <span className="text-4xl bg-beige p-4">Categories</span>
        <Slider heading="Example Slider" slides={slideData} />
        {/* <Recommended /> */}
        <OurPicks />
      </div>

      {/* Newest Products */}
      <div className="featured-products md:mx-10">
        <h1 className="mb-4 text-center text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-black underline">
          Most Popular
        </h1>
        <ProductWrapper sort={"newest"}></ProductWrapper>
        <br></br>
      </div>

      {/* Testiimonials */}
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-black underline">
          Testimonials
        </h1>
        <Testimonials></Testimonials>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
