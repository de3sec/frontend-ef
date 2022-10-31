import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const userLogged = useSelector((state) => state.user.currentUser);

  const ecoImg =
    "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  return (
    <div className="bg-gray h-full">
      <div className="mx-auto max-w-7xl h-80 py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-10 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="mt-4 block text-lightgreen bg-blue p-2 rounded-sm">
            Join Us in the fight against climate change.
          </span>
        </h1>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            {userLogged !== null ? (
              <div></div>
            ) : (
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue px-5 py-3 text-base font-bold text-white uppercase hover:text-green"
              >
                Get started
              </a>
            )}
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://seller.ecofreaky.com"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-bl px-5 py-3 text-base font-bold uppercase bg-blue text-lightgreen hover:text-green"
            >
              Sell on EcoFreaky
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-lightgreen rounded-md max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <img
          className="h-full w-full object-cover md:h-full lg:w-96 shadow-md rounded-md"
          alt="eco-friendly, enviornment, save water, no plastic"
          src={ecoImg}
        ></img>
        <article className="md:mt-5 px-20 b">
          <h1 className="text-4xl mb-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h1>
          <h1>
            We noticed that we humans are highly dependent on products that are
            harming the environment. While on the other hand Eco friendly start
            ups and environmental organisations have been trying hard to save
            the earth with different strategies, their efforts have been
            overpowered by big companies producing tons of waste everyday. We at
            EcoFreaky aim to bring together like minded producers and
            manufacturers that develop Eco friendly, sustainable and durable
            products and drive solutions in order to repair the harm done to the
            environment. EcoFreaky is a market place where you can get your
            hands on the finest products which are environment friendly and
            affordable along with sustainable and durable packaging at the same
            time.
          </h1>
        </article>
      </div>
    </div>
  );
};

export default About;
