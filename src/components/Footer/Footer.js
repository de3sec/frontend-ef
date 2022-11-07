import React from "react";
import Logo from "../../assets/favicon.png";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/userRedux";

export default function Footer() {
  const userLogged = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <section className="bg-blue overflow-x-hidden">
      <div className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-10 md:mb-0">
            <div className="w-full md:w-2/6 md:border-r md:border-green px-4">
              <div className="max-w-xs mx-auto py-20">
                <a
                  className="inline-block text-xl text-white font-medium font-heading mb-2 md:mb-6"
                  href="/"
                >
                  <img className="h-12" src={Logo} alt="" width="auto" />
                  EcoFreaky
                </a>
                <p className="max-w-xs text-white  font-sans">
                  Only platform to connect ecofreaks.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/6 px-4">
              <div className="md:py-20 px-8 lg:pl-20 lg:pr-10">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-1/2 md:w-1/4 mb-12 md:mx-4 md:mb-0">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Contact
                    </h3>
                    <ul>
                      <li className="mb-4 md:mb-8">
                        <a
                          href="mailto:support@ecofreaky.com"
                          className="ml-2 text-white hover:text-green"
                        >
                          Returns
                        </a>
                      </li>
                      <li className="mb-4 md:mb-8">
                        <a
                          href="mailto:team@ecofreaky.com"
                          className="ml-2 text-white hover:text-green"
                        >
                          Team
                        </a>
                      </li>
                      {/* <li>
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Blog
                          </a>
                        </li> */}
                    </ul>
                  </div>
                  <div className="w-1/2 md:w-1/4 md:px-4 mb-12 md:mb-0">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Pages
                    </h3>
                    <ul>
                      <li className="mb-4 md:mb-8">
                        {userLogged !== null ? (
                          <a
                            className="text-white hover:text-gray-400"
                            href="/login"
                            onClick={logoutHandler}
                          >
                            Logout
                          </a>
                        ) : (
                          <a
                            className="text-white hover:text-gray-400"
                            href="/login"
                          >
                            Login
                          </a>
                        )}
                      </li>
                      <li className="mb-4 md:mb-8">
                        {userLogged !== null ? (
                          <p></p>
                        ) : (
                          <a
                            className="text-white hover:text-gray-400"
                            href="/register"
                          >
                            Register
                          </a>
                        )}
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-gray-400"
                          href="https://seller.ecofreaky.com"
                        >
                          Sell on Ecofreaky
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 md:w-1/4 md:px-4">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Legal
                    </h3>
                    <ul>
                      <li className="mb-4 md:mb-8">
                        <a
                          className="text-white hover:text-gray-400"
                          href="/tos"
                        >
                          Terms
                        </a>
                      </li>
                      <li className="mb-4 md:mb-8">
                        <a
                          className="text-white hover:text-gray-400"
                          href="/about"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-4 md:mb-8">
                        <a
                          className="text-white hover:text-gray-400"
                          href="/team"
                        >
                          Team
                        </a>
                      </li>
                      <li className="mb-4 md:mb-8">
                        <a
                          className="text-white hover:text-gray-400"
                          href="/privacy"
                        >
                          Privacy
                        </a>
                      </li>
                      <li className="mb-4 md:mb-8">
                        <a
                          className="text-white hover:text-gray-400"
                          href="/returns"
                        >
                          Return Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="w-1/2 md:w-1/4 px-4">
                      <h3 className="mb-8 text-sm text-white uppercase font-heading">
                        Resources
                      </h3>
                      <ul>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Service
                          </a>
                        </li>
                        <li className="mb-8">
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-white hover:text-gray-400"
                            href="#"
                          >
                            Pricing
                          </a>
                        </li>
                      </ul>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t md:border-r md:border-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <p className="mb-8 md:mb-0 text-white">
              All rights reserved &copy; Ecofreaky 2021
            </p>
            <div className="flex w-full md:w-auto">
              <ul className="flex ml-1 lg:px-2 text-white">
                <li className="mr-2 shadow-md shadow-slate-500 rounded-full w-6 h-6 bg-indigo-600">
                  <a
                    className="pt-2 ml-1 mb-2 px-1 fa fa-md fa-facebook"
                    href="https://www.facebook.com/EcoFreaky"
                  ></a>
                </li>
                <li className="mr-2 inline-flex items-center justify-center shadow-md shadow-[#d62976] rounded-full w-6 h-6 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]">
                  <a
                    className="p-1 fa fa-md fa-instagram"
                    href="https://www.instagram.com/ecofreaky"
                  ></a>
                </li>
                <li className="shadow-md shadow-red-700 inline-flex items-center justify-center rounded-full w-6 h-6 px-1 bg-red-600">
                  <a
                    className="p-1 fa fa-md fa-youtube"
                    href="https://www.youtube.com/channel/UCkVypisBUrIxwn0IzF4mVsw"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
