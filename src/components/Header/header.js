/* eslint-disable jsx-a11y/anchor-has-content */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/eflogo.svg";
import ProfileCard from "./ProfileCard/ProfileCard";
import { Search } from "../search/search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

const navigation = {
  categories: [
    {
      id: "fashion",
      name: "Fashion",
      featured: [
        {
          name: "New Arrivals",
          href: "/products/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/products/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          href: "/products/clothing",
        },
        {
          id: "footwear",
          name: "Footwear",
          href: "/products/footwear",
        },
        {
          id: "accessories",
          name: "Accessories",
          href: "/products/accessories",
        },
      ],
    },
    {
      id: "homewellness",
      name: "Home & Wellness",
      featured: [
        {
          name: "New Arrivals",
          href: "/products/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/products/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "cleaners",
          name: "Cleaners",
          href: "/products/cleaners",
        },
        {
          id: "personalcare",
          name: "Personal Care",
          href: "/products/personalcare",
        },
        {
          id: "skincare",
          name: "Skin Care",
          href: "/products/skincare",
        },
        {
          id: "haircare",
          name: "Hair Care",
          href: "/products/haircare",
        },
        {
          id: "oralcare",
          name: "Oral Care",
          href: "/products/oralcare",
        },
        {
          id: "kids",
          name: "Kids",
          href: "/products/kids",
        },
        {
          id: "babycare",
          name: "Baby care",
          href: "/products/babycare",
        },
        {
          id: "toys",
          name: "Toys",
          href: "/products/toys",
        },
        {
          id: "stationary",
          name: "Stationary",
          href: "/products/stationary",
        },
        {
          id: "decorfurniture",
          name: "Decor",
          href: "/products/decorfurniture",
        },
        {
          id: "homedecor",
          name: "Home Decor",
          href: "/products/homedecor",
        },
        {
          id: "gardening",
          name: "Gardening",
          href: "/products/gardening",
        },
        {
          id: "kitchen",
          name: "Kitchen",
          href: "/products/kitchen",
        },
        {
          id: "homefurnishing",
          name: "Home Furnishings",
          href: "/products/homefurnishing",
        },
        {
          id: "foodnutrition",
          name: "Food & Nutrition",
          href: "/products/foodnutrition",
        },
        {
          id: "snacks",
          name: "Snacks",
          href: "/products/snacks",
        },
        {
          id: "desserts",
          name: "Desserts",
          href: "/products/desserts",
        },
        {
          id: "beverages",
          name: "Beverages",
          href: "/products/beverages",
        },
        {
          id: "pets",
          name: "Pets",
          href: "/products/pets",
        },
        {
          id: "petfood",
          name: "Pet Food",
          href: "/products/petfood",
        },
        {
          id: "petgroom",
          name: "Pet Groom",
          href: "/products/petgroom",
        },
        {
          id: "petaccessories",
          name: "Pet Accessories",
          href: "/products/petaccessories",
        },
      ],
    },
  ],
  pages: [
    { name: "Personal Care", href: "/products/personalcare" },
    { name: "About Us", href: "/about" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, searchOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const cartQty = useSelector((state) => state.cart.quantity);
  const userLogged = useSelector((state) => state.user.currentUser);

  return (
    <div className="bg-blue">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-9 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-9 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-black border-blue"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            {/* <a href={item.href} className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                              {item.name}
                            </a> */}
                            <Link
                              to={`products/${item.name}`}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            <li>
                              <a
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-gray-900"
                                href={`
                                ${section.href}`}
                              >
                                {section.name}
                              </a>
                            </li>
                          </ul>
                          {/* <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-2 p-2 block text-gray-500"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul> */}
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link to="/login" state={"home"}>
                    {userLogged === null && (
                      <button className="-m-2 p-2 block font-medium text-gray-900">
                        Sign in
                      </button>
                    )}
                  </Link>
                </div>
                <div className="flow-root">
                  <Link to="/signup" state={"home"}>
                    {userLogged === null && (
                      <button className="-m-2 p-2 block font-medium text-gray-900">
                        Create account
                      </button>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className={"nav sticky top-0 z-50 bg-blue "}>
        <div className="bg-yellow flex flex-row justify-between content-end items-center sm:justify-between text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          {/* <p className="bg-yellow h-10 flex justify-between content-end items-center sm:justify-between text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            Free delivery on orders above ₹1000
          </p>
          <div className="flex flex-row w-auto md:w-auto sm:w-auto content-end sm:content-end text-sm font-medium text-white lg:px-0">
            <ul className="">
              <li className="inline-block">
                <a className="ml-4" href="https://www.facebook.com/EcoFreaky">
                  <img
                    className="h-6"
                    src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png"
                    alt="ecofreaky"
                  />
                </a>
              </li>
              <li className="inline-block">
                <a className="ml-2" href="https://www.instagram.com/ecofreaky/">
                  <img
                    className="h-6"
                    src="https://i.ibb.co/2St7HJC/instagram-1.png"
                    alt="ecofreaky"
                  />
                </a>
              </li>
              <li className=''>
                  <a
                className="ml-2"
                href="https://www.youtube.com/channel/UCkVypisBUrIxwn0IzF4mVsw"
              >
                <img
                  className="h-6"
                  src="https://img.icons8.com/color/48/000000/youtube-play.png"
                  alt="ecofreaky youtube_ecofreaky_channel"
                />
              </a>
              </li>
            </ul>
          </div> */}
          <div className="grid grid-cols-2 w-full">
            <div className="flex items-start  w-full">
              <marquee
                direction="left"
                className="h-10 flex justify-between content-end items-center truncate sm:justify-between text-sm font-medium text-white px-4 sm:px-6 lg:px-8"
              >
                ✔ Free delivery on orders above ₹999 | 🎍 Register to sell on
                EcoFreaky | 🌍 Marketplace for enviornment friendly products.
              </marquee>
            </div>
            <div className="social-media-icons p-2 grid items-end justify-items-end mx-2">
              <ul className="flex ml-1 lg:px-2">
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

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-2 sm:px-4 md:px-2 lg:px-4"
        >
          <div className="border-b border-black">
            <div className="h-16 flex items-center md:px-8 lg:px-0">
              <button
                type="button"
                className="bg-green p-1 rounded-full text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <MenuIcon className="p-1 h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="mt-7 w-20 h-20 lg:ml-0">
                <a href="/">
                  {/* <span className="sr-only text-white">Workflow</span> */}
                  <img
                    className="h-2/3 1 mt-2 w-full text-green"
                    src={Logo}
                    alt=""
                  />
                  {/* <h1 className='text-green'>eco-freaky</h1> */}
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-green text-green hover:text-green border-b-2"
                                  : "border-transparent text-white hover:text-green  decoration-green",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium  -mb-px pt-px"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow opacity-95"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white shadow-sm text-blue">
                                <div className="max-w-7xl mx-auto px-8  backdrop-blur-lg">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-2xl text-black"
                                          >
                                            <span
                                              className="absolute z-10 inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 gap-y-10 gap-x-8 text-sm">
                                      <div className="grid grid-cols-3">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              <li
                                                key={section.name}
                                                className=""
                                              >
                                                <a
                                                  href={section.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {section.name}
                                                </a>
                                              </li>
                                            </ul>
                                            {/* <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))
                                            }
                                          </ul> */}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-white hover:text-green"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="/products/" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-india.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                <Transition.Root show={search} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 flex z-40"
                    onClose={searchOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 bg-transparent bg-opacity-40" />
                    </Transition.Child>
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <div className="flex lg:ml-3 w-full shadow-xl flex-col">
                        <Search />
                        <button
                          type="button"
                          className="-m-2 p-2 rounded-lg inline-flex items-center justify-center align-bottom text-black"
                          onClick={() => searchOpen(false)}
                        >
                          <span className="sr-only">Close Search</span>
                          <div className="h-12 w-12 rounded-full bg-white backdrop-blur-md inline-flex items-center justify-center">
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </div>
                        </button>
                      </div>
                    </Transition.Child>
                  </Dialog>
                </Transition.Root>

                <div className="flex flex-col">
                  <button
                    type="button"
                    className="p-1 mx-2 lg:px-8 bg-lightgreen rounded-full text-black flex flex-row"
                    onClick={() => searchOpen(true)}
                  >
                    <h1 className="p-1">Search</h1>
                    <SearchIcon className="m-1 w-4 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Account Popup */}

                {userLogged !== null ? (
                  <div>
                    <Transition.Root show={profile} as={Fragment}>
                      <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40"
                        onClose={setProfile}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="transition-opacity ease-linear duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity ease-linear duration-300"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed bg-white bg-opacity-40 inset-0" />
                        </Transition.Child>
                        <Transition.Child
                          as={Fragment}
                          enter="transition ease-in-out duration-300 transform"
                          enterFrom="-translate-y-full"
                          enterTo="translate-x-0"
                          leave="transition ease-in-out duration-300 transform"
                          leaveFrom="translate-y-0"
                          leaveTo="-translate-y-full"
                        >
                          <div className="center  flex w-full mt-10 lg:w-80 lg:mt-1 relative lg:ml-3 lg:p-2 lg:absolute lg:right-10 top-24 flex-col">
                            <ProfileCard
                              className="w-full"
                              user={userLogged}
                              state=""
                            ></ProfileCard>
                            <button
                              type="button"
                              className="-m-8 p-2 rounded-lg inline-flex items-center justify-center align-bottom text-black"
                              onClick={() => setProfile(false)}
                            >
                              <span className="sr-only">Close Search</span>
                              <div className="h-12 w-12 rounded-full bg-white inline-flex items-center justify-center">
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </div>
                            </button>
                          </div>
                        </Transition.Child>
                      </Dialog>
                    </Transition.Root>
                    <div className="flex flex-col">
                      <button
                        type="button"
                        className="p-2 mx-1 lg:mx-4 bg-lightgreen rounded-full text-black flex flex-row"
                        onClick={() => setProfile(true)}
                      >
                        <h1 className="p-1 hidden">Account</h1>
                        <UserIcon className="m-1 w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="hidden mx-4 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                    <Link to="/login" state={"home"}>
                      <button className="font-medium text-white">
                        Sign in
                      </button>
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                )}

                {/* Cart */}
                <div className="cartContainer">
                  <Link to="/cart">
                    <span className="itemsCount text-sm font-medium text-lightgreen group-hover:text-gray-800">
                      {cartQty}
                    </span>

                    <ShoppingBagIcon
                      className="flex-shrink-0 h-8 w-8 text-white group-hover:text-gray-500"
                      aria-hidden="true"
                    />

                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
