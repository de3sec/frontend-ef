import React, { useState, useEffect } from "react";
import "./card.css";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../redux/userRedux";
import { Link } from "react-router-dom";

export default function ProfileCard() {
  const userLogged = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(logOut());
  };

  return (
    <div
      className="p-10 sm:px-12 border-2 border-green bg-blue rounded-b-xl shadow-green max-w-sm w-screen"
      aria-modal="true"
      aria-label="Item added to your cart"
    >
      <div className="flex items-start pt-8 pb-12">
        {/* <UserAvatar size="72" src={userLogged.photoUrl} name={!userLogged.name  ? userLogged.email : userLogged.name}></UserAvatar> */}

        <div className="ml-4">
          <dl className=" space-y-1 m-2 p-2 text-xs text-white">
            {userLogged.name ? (
              <div>
                <dt className="inline">Name: </dt>
                <dd className="inline">{userLogged.name}</dd>
              </div>
            ) : (
              <div>
                <dt className="inline">Name: </dt>
                <dd className="inline">{"An Ecofreak"}</dd>
              </div>
            )}
            <div>
              <dt className="inline">Email: </dt>
              <dd className="inline">{userLogged.email}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="space-y-4 text-center">
        <a
          className="block p-4 text-sm text-white border-2 border-lightgreen rounded-full hover:ring-1 hover:ring-black shadow-green font-medium"
          href="/orders"
        >
          View my orders
        </a>
        <Link to="/cart">
          <button
            className="block w-full p-4 text-sm font-medium rounded-full text-black bg-lightgreen hover:ring-1 hover:ring-rose-900"
            type="button"
          >
            Cart
          </button>
        </Link>

        <a
          className="inline-block ml-2 flex-row text-sm text-white tracking-wide underline underline-offset-4 hover:text-2xl/75"
          href="/Login"
          onClick={logoutHandle}
        >
          Logout
          <h1 className="h-5 w-20">&#8227;</h1>
        </a>
      </div>
    </div>
  );
}
