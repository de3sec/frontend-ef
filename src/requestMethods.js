import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api/";
const BASE_URL =
  "https://api.ecofreaky.com/api/" || "http://localhost:5000/api/";

export const getTokenFromStorage = () => {
  try {
    const TOKEN = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser.token;
    // console.log(TOKEN);
    return TOKEN;
  } catch (error) {
    console.log(error);
  }
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: getTokenFromStorage() },
});
