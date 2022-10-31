import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import {
  addProduct,
  decreaseProduct,
  emptyCart,
  removeProduct,
} from "../../redux/cartRedux";
import {
  createOrder,
  checkoutSession,
  getCartState,
} from "../../redux/apiCalls";
import { toast } from "react-toastify";

import { addressUpdate } from "../../redux/userRedux";
import { userRequest } from "../../requestMethods";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/login", { state: "cart" });
    }
    if (user) {
      getCartState(dispatch, user._id);
    }
  }, [user, dispatch, navigate]);
  // console.log(cart.products);

  const [getAddress, setAddress] = useState({});
  const checkout = () => {
    const data = {
      products: cart.products,
      address: getAddress,
      quantity: cart.quantity,
      total: cart.total,
      user: user._id,
    };
    if (Object.keys(getAddress).length === 0) {
      toast.error("Choose an address");
    } else {
      createOrder(data).then((res) => {
        dispatch(emptyCart());
        navigate("/orders");
      });
    }
  };

  const stripeSession = () => {
    const data = {
      products: cart.products,
      address: getAddress,
      quantity: cart.quantity,
      total: cart.total,
      user: user._id,
    };
    if (Object.keys(getAddress).length === 0) {
      toast.error("Choose an address");
    } else {
      checkoutSession(cart.products, user._id, data);
    }
  };

  // useEffect(() => {
  //   const checkPayment = location.pathname.split("/")[1];
  //     if (checkPayment === "success") {

  //     }
  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div className="cart">
      <div className="w-full flex flex-col lg:flex-row center">
        {/* Address Components */}
        <div className="flex flex-col m-6 h-full overflow-y-scroll lg:flex">
          <span className="rounded-md p-2 mb-2 bg-blue text-green">
            Choose an address:
          </span>
          {user !== null ? (
            user.addresses?.map((address, index) => (
              <div
                className="address-box bg-white p-6 shadow-md flex border-b"
                key={index}
              >
                <input
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 bg-grey bg-opacity-40 focus:ring-blue mt-2 focus:outline-none w-8 h-8 border-2 rounded-full border-brown relative cursor-pointer checked:border-lightgreen checked:bg-yellow"
                  type={"radio"}
                  name={"address"}
                  checked={getAddress === address}
                  value={address}
                  onChange={() => setAddress(address)}
                ></input>
                <div className="address mx-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {address.name}
                  </h2>
                  <p className="text-gray-700">Address: {address.address}</p>
                  <p className="text-gray-700">Pincode: {address.pincode}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex text-sm flex-col justify-end items-end w-full">
              No address.
            </div>
          )}
          <button
            type="button"
            className="p-4 mt-5 h-15 w-15 border rounded-full bg-lightgreen border-lightgreen"
            onClick={() => {
              navigate("/address");
            }}
          >
            <span className="text-sm">Add New</span>
          </button>
        </div>
        {/* Cart  */}
        <div className="cart-items flex flex-col max-w-4xl lg:w-full p-6 space-y-1 dark:bg-coolGray-900 dark:text-coolGray-100">
          <h2 className="text-xl border p-2 text-blue font-light">Your cart</h2>
          <ul className="flex flex-col divide-y divide-coolGray-700">
            {cart.products.length > 0 ? (
              cart.products.map((product, index) => (
                <li
                  className="flex flex-col py-6 sm:flex-row sm:justify-between"
                  key={index}
                >
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-coolGray-500"
                      src={product.image[0].url}
                      alt={product.pname}
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                            {product.pname}
                          </h3>
                          <p className="text-sm dark:text-coolGray-400">{`Size: ${product.selectedSize.name}`}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            ₹{product.pprice}
                          </p>
                          <p className="text-sm line-through dark:text-coolGray-600">
                            ₹{product.aprice}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex text-brown items-center px-2 py-1 pl-0 space-x-1"
                          onClick={() => dispatch(removeProduct(product))}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"
                            ></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                        {/* <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                        </svg>
                                        <span>Add to favorites</span>
                                    </button> */}
                        <div className="custom-number-input h-10 w-16">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent ml-3">
                            <button
                              onClick={() => dispatch(decreaseProduct(product))}
                              className="bg-transparent text-black h-full w-15 rounded-l cursor-pointer"
                            >
                              <span className="m-auto text-3xl font-thin">
                                −
                              </span>
                            </button>
                            <input
                              type="number"
                              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                              name="custom-input-number"
                              value={product.quantity}
                            ></input>
                            <button
                              onClick={() => dispatch(addProduct(product))}
                              className="bg-transparent text-black h-full w-15 rounded-r cursor-pointer"
                            >
                              <span className="m-auto text-3xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <b className="text-center text-brown">Your cart is empty</b>
            )}
          </ul>
          <div className="space-y-3 text-right">
            <p>
              Total amount:
              <span className="font-semibold"> ₹{cart.total}</span>
            </p>
            <p className="text-md dark:text-coolGray-400">
              Payment method: STRIPE
            </p>
          </div>
          <br></br>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-lightgreen border-lightgreen"
              onClick={() => {
                navigate("/shop");
              }}
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </button>
            <button
              onClick={() => {
                stripeSession();
              }}
              disabled={cart.quantity === 0}
              type="button"
              className="px-6 py-2 border rounded-md bg-blue text-green dark:border-violet-400"
            >
              <span className="sr-only sm:not-sr-only"></span>Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
