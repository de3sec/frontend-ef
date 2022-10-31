import React from "react";
import { useMediaQuery } from "react-responsive";
import HeroSlider from "./hero-slider";
// import hero1 from "../../assets/Number 1.png"
// import hero2 from "../../assets/Number 2.png"

import "./hero.scss";

const slideData = [
  {
    image:
      "https://ik.imagekit.io/de3sec/assets/Ecofreaky_Slider_lloekQHM-Q?ik-sdk-version=javascript-1.4.3&updatedAt=1665127121422",
    href: "/shop",
  },
  {
    image:
      "https://images.pexels.com/photos/4202926/pexels-photo-4202926.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4202926.jpg&fm=jpg",
    href: "/shop",
  },
  {
    image:
      "https://ik.imagekit.io/de3sec/assets/EcSlide_FooctN1HQ?ik-sdk-version=javascript-1.4.3&updatedAt=1665127713739",
    href: "/shop",
  },
  {
    image:
      "https://ik.imagekit.io/de3sec/assets/EcSlide3_OKJWCjkji.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665128244054",
    href: "/shop",
  },
];

export default function Hero({ category }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 980px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px)" });

  return (
    // <div className="relative bg-white overflow-hidden mt-1 mb-1">
    //   {isDesktopOrLaptop && (
    //     <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
    //         <div className="sm:max-w-lg">
    //           <h1 className="hero text-5xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
    //             Eco-
    //           </h1>
    //           <h1 className="hero text-5xl font-light tracking-tight text-[#444] lg:text-5xl">
    //             Conscious Shopping.
    //           </h1>
    //           <p className="mt-4 text-xl text-gray-500">
    //             Now browse our exclusive range of sustainable products custom
    //             made for your needs.
    //           </p>
    //         </div>
    //         <div>
    //           <div className="mt-10">
    //             {/* Decorative image grid */}
    //             <div
    //               aria-hidden="true"
    //               className="pointer-events lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
    //             >
    //               <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
    //                 <div className="flex items-center space-x-6 lg:space-x-8">
    //                   <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src={
    //                             "https://ik.imagekit.io/de3sec/assets/Ecosys_VwhTzW038?ik-sdk-version=javascript-1.4.3&updatedAt=1665743434360"
    //                           }
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src="https://ik.imagekit.io/de3sec/assets/Number_1_OuTFBljKs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659467120800"
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src="https://ik.imagekit.io/de3sec/assets/Number_5_W_UOeJH1v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659467121761"
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src="https://ik.imagekit.io/de3sec/assets/Number_3_A4PTIzLVbQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659467121808"
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src="https://ik.imagekit.io/de3sec/assets/Number_4_1IS87zSU3v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659467121773"
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src="https://ik.imagekit.io/de3sec/assets/Number_7_lSGep8GW3r.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659467122927"
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="w-44 h-64 rounded-lg overflow-hidden">
    //                       <a href={`/shop`}>
    //                         <img
    //                           loading="lazy"
    //                           src="https://ik.imagekit.io/de3sec/assets/Number_6_oDcnQgzG9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659467122473"
    //                           alt=""
    //                           className="w-full h-full object-center object-cover"
    //                         />
    //                       </a>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             <a href="/shop" className="btn-2 mt-8">
    //               Shop featured &#707;
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //   {isTabletOrMobile && <HeroSlider slides={slideData}></HeroSlider>}
    // </div>
    <HeroSlider slides={slideData}></HeroSlider>
  );
}

//product

{
  /* <div className="mt-3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-6xl">
  <div className="md:flex lg:flex">
    <div className="md:shrink-0 lg:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48 lg:h-full lg:w-48" src={hero2} alt="Man looking at item at a store"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text- leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div> */
}
