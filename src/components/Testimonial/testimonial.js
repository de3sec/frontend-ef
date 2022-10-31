import React from "react";
const testimonials = [
  {
    id: 1,
    name: "Subhajit Mukherjee",
    image:
      "https://ik.imagekit.io/de3sec/assets/Subhajit_Mukherjee__KJasOtr2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662201254280",
    designation: "Mission Green Mumbai",
    testimonial:
      "I believe that this concept has great potential and my goal of living an eco-friendly life has now become a real possibility.",
  },
  {
    id: 2,
    name: "Rakesh Khatri",
    image:
      "https://ik.imagekit.io/de3sec/assets/Nest_man_of_India_8r9Q3Pdvr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662201254279",
    designation: "Nest Man Of India",
    testimonial:
      "Ecofreaky can really change how we perceive sustainable living.  It will bring us one step closer to save this planet",
  },
  {
    id: 3,
    name: "Yogesh Shinde",
    image:
      "https://ik.imagekit.io/de3sec/assets/Bamboo_Man_Of_India_2YgQApg7ID.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662201254292",
    designation: "Bamboo Man of India",
    testimonial:
      "This marketplace will easily provide a guilt-free shopping experience to consumers because other marketplaces generate a lot of waste in deliveries",
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/de3sec/assets/Recycle_Man_on_India_7Cfnq6Z5e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662201254289",
    name: "Binish Desai",
    designation: "Recycle Man Of India",
    testimonial:
      "I have always wanted a one-stop marketplace for sustainable products to cut down the hassle of scouring the internet for sustainable products. And Ecofreaky is just that.",
  },
];
export default function Testimonials() {
  return (
    <div className="testimonial-1 py-4 md:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="md:flex md:flex-wrap md:-mx-4 mb-4">
          {testimonials.map((testimonial, index) => (
            <div className="h-full md:w-1/2 md:px-4 mt-6" key={index}>
              <div className="testimonial p-6 border-2 border-solid flex bg-lightgreen hover:border-black hover:bg-white transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black">{testimonial.testimonial}</p>
                  <div className="text-black font-bold uppercase mt-6">
                    - {testimonial.name}
                  </div>
                  <div className="text-black">{testimonial.designation}</div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="md:w-1/2 md:px-4 mt-6 md:mt-0">
        <div className="testimonial p-6 border-2 border-solid flex bg-lightgreen hover:border-black hover:bg-white transition-colors duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"/>
          </div>
          <div>
            <p className="text-black">"Needless to say we are extremely satisfied with the results. Keep up the excellent work. Your company is truly upstanding and is behind its product 100%. Thanks guys, keep up the good work!"</p>
            <div className="text-black font-bold uppercase mt-6">- Annabell M.</div>
            <div className="text-black">Microsoft</div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:px-4 mt-6">
        <div className="testimonial p-6 border-2 border-solid flex bg-lightgreen hover:border-black hover:bg-white transition-colors duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"/>
          </div>
          <div>
            <p className="text-black">"FWR Bootstrap Blocks is exactly what our business has been lacking. FWR Bootstrap Blocks is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it."</p>
            <div className="text-black font-bold uppercase mt-6">- Candace H.</div>
            <div className="text-black">Google</div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:px-4 mt-6">
        <div className="testimonial p-6 border-2 border-solid flex bg-lightgreen hover:border-black hover:bg-white transition-colors duration-300">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
            <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"/>
          </div>
          <div>
            <p className="text-black">"This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"</p>
            <div className="text-black font-bold uppercase mt-6">- Joe H.</div>
            <div className="text-black">Facebook</div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}
