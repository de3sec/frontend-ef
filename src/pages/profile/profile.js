import React, { useState, useEffect } from "react";
import "./profile.css";
import { Country, State, City } from "country-state-city";
import { useForm } from "react-hook-form";
import { userUpdate } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [states, setStates] = useState([]);
  const [state, setStateValue] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      const getStates = State.getStatesOfCountry("IN");
      setStates(getStates);
    };
    fetchStates();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const handleState = (event) => {
  //     event.preventDefault();
  //     const ccode = "IN"
  //     const stateValue = event.target.value
  // console.log(stateValue)
  // const splitter = stateValue?.split(",");
  // const value = splitter[1];
  // console.log(`${value}`)
  // const fetchCities = City.getCitiesOfState(ccode, `GJ`);
  // console.log(fetchCities)
  // setCities(fetchCities);
  // setIsoCode(value);
  // }

  // useEffect(() => {
  //   const fetchCities = City.getCitiesOfState("IN", isoCode);
  //   console.log(fetchCities)
  //   setCities(fetchCities);
  // }, [isoCode])

  const onSubmit = async () => {
    state !== "" ? setValid(true) : setValid(false);
    const addresses = [{ name, email, city, phone, pincode, state, address }];
    await userUpdate(user?._id, addresses, navigate);
  };
  const handleState = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setStateValue(value);
  };
  return (
    <div className="w-full p-10 flex justify-center">
      <form
        className="bg-lightgreen bg-opacity-70 shadow-lightgreen shadow-lg rounded-md w-auto max-w-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap z-10 -mx-3 pr-6 pl-6 pt-6 w-full">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              {...register("name", { required: true, maxLength: 80 })}
              className="block w-full text-black shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="p-3 text-red-500">
              {errors.name?.type === "required" && "Name is required"}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 pr-6 pl-6 pt-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="p-3 text-red-500">
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 pr-10 pl-10 pt-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Phone (+91, India)
          </label>
          <input
            {...register("phone", {
              required: true,
              placeholder: "+91",
              maxLength: 10,
              pattern: /[6789][0-9]{9}/i,
            })}
            className="appearance-none block w-full bg-gray-200 text-black shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="tel"
            title="Please enter valid phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="p-3 text-red-500">
            {" "}
            {errors.phone?.type === "required" &&
              "Enter a valid 10 digit phone No"}{" "}
          </span>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2 p-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              City
            </label>
            <input
              {...register("city", { required: true })}
              className="appearance-none block mb-2 w-full bg-gray-200 text-gray-700 shadow-md rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Eg. New Delhi"
              onChange={(e) => setCity(e.target.value)}
            />
            <span className="mt-2 p-3 text-red-500">
              {errors.city?.type === "required" && "City is required"}
            </span>
          </div>
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              State
            </label>
            <div className="relative">
              <select
                {...register("state", { required: true })}
                className="block appearance-none w-full mb-2 bg-gray-200 shadow-md text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                defaultValue={"choose State"}
                onChange={(e) => handleState(e)}
              >
                <option
                  defaultValue={true}
                  value="choose State"
                  disabled={true}
                >
                  Choose State
                </option>
                {states.map((state, index) => {
                  return (
                    <option key={index} value={state.name}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
              <span className="p-3 text-red-500">
                {errors.state?.type === "required" && "State is required"}
              </span>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mt-6 lg:mt-0 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Pincode
            </label>
            <input
              {...register("pincode", {
                required: true,
                pattern: /^[1-9][0-9]{5}$/i,
              })}
              className="appearance-none block w-full bg-gray-200 mb-2 text-gray-700 shadow-md rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="number"
              onChange={(e) => setPin(e.target.value)}
            />
            <span className="mt-3 text-red-500">
              {errors.pincode?.type === "required" && "Pincode is required"}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 pr-6 pl-6 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Street Address
            </label>
            <input
              {...register("address", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-black shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="p-3 text-red-500">
              {errors.address?.type === "required" && "Address is required"}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 pr-6 pl-6 mb-6 justify-center w-full">
          <button
            className="relative inline-flex items-center justify-center px-8 lg:px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-lightgreen bg-blue bg-opacity-80 rounded-lg group"
            onClick={() => handleSubmit(onSubmit)}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-lightgreen bg-opacity-10 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue"></span>
            <span className="relative uppercase">Save Address</span>
          </button>
        </div>
      </form>
    </div>
  );
};
