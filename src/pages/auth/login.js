// import axios from "axios";
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginFailure } from "../../redux/userRedux";

import { login } from "../../redux/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  console.log(errorMessage);

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    } else {
      // reset error to default
      dispatch(loginFailure(""));
      return;
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(location.state);

  // const dbAuth = async (token, user) => {
  //   await axios.post(
  //     process.env.REACT_APP_BASE_URL + `users/fbauth`,
  //     {},
  //     {
  //       headers:{
  //         token,
  //       }
  //     }
  //   ).then((res) =>
  //     setId(res.data._id)).then(() => {
  //     dispatch(loginSuccess({...user, id}));
  //   })

  // }

  const loginHandler = async () => {
    const body = { email, password };
    login(dispatch, body, `users/signin`, navigate, location?.state);
  };

  // const handleClick = async (event) => {
  //   event.preventDefault();
  //   dispatch(loginStart());
  //   await signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const fbuser = userCredential?.user;
  //       dbAuth(fbuser.accessToken, fbuser);

  //     if(fbuser.displayName !== null){
  //       toast.success(`Welcome ${fbuser.displayName}`, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     } else if (fbuser.displayName===null) {
  //       toast.success(`Welcome ${fbuser.email}`, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     }
  //     else{
  //       toast.success(`Welcome ${fbuser.email}`, {
  //         position: toast.POSITION.TOP_CENTER
  //       });
  //     }
  //     return true
  //   }).catch((error) => {
  //     dispatch(loginFailure());
  //     const errorCode = error.code;
  //       const errorMessage = error.message;
  //       if(error){
  //         console.log(`error ${errorCode} msg : ${errorMessage}`)
  //         toast.error(`Sorry! ${errorMessage}`, {
  //           position: toast.POSITION.TOP_CENTER
  //         })
  //       }
  //       return false
  //   })
  // }

  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider()
  //   dispatch(loginStart());
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken;
  //       const fbuser = result?.user
  //       dbAuth(fbuser, token)
  //       toast.success(`Ecofreaky welcomes you.${fbuser.displayName}`, {
  //         position: toast.POSITION.TOP_CENTER,
  //         onClose: <Link to='/'/>
  //       });
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       dispatch(loginFailure());
  //       console.log(error);

  //       if(error){
  //         toast.error(`Sorry! something went wrong.`, {
  //           position: toast.POSITION.TOP_CENTER
  //         })
  //       }
  //       // ...
  //     });

  // }

  return (
    <div>
      <main>
        <section className="absolute w-full h-full backdrop-blur-lg">
          <div
            className="absolute top-0 w-full h-full"
            style={{
              backgroundSize: "10%",
            }}
          >
            <div className="blur-md w-full h-full">
              <svg
                className="BA"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="70vh"
                viewBox="0 0 1440 540"
              >
                <g mask='url("#SvgjsMask1046")' fill="none">
                  <path
                    d="M736 33L895 192"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M63 47L-215 -231"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M9 228L-190 29"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M472 248L204 -20"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M41 84L-225 -182"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M168 503L-137 198"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M722 269L341 -112"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1429 199L1143 -87"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M488 431L890 833"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M442 305L782 645"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M392 22L21 -349"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M577 321L743 487"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M350 340L174 164"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M811 513L598 300"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M871 411L1172 712"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M420 463L709 752"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M373 213L20 -140"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M1346 295L1661 610"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M977 191L1224 438"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1215 511L1542 838"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M507 95L219 -193"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M934 462L1354 882"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M238 265L436 463"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1116 394L892 170"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1090 55L1347 312"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M415 380L243 208"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M439 462L88 111"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M415 280L775 640"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M976 488L1124 636"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M947 150L789 -8"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M445 489L860 904"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M705 240L334 -131"
                    strokeWidth="6"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M42 499L432 889"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M634 214L917 497"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M525 427L914 816"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1035 402L655 22"
                    strokeWidth="10"
                    stroke="url(#SvgjsLinearGradient1050)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                  <path
                    d="M1388 19L995 -374"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1049)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M397 298L806 707"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1047)"
                    strokeLinecap="round"
                    className="BottomRight"
                  ></path>
                  <path
                    d="M1419 535L1061 177"
                    strokeWidth="8"
                    stroke="url(#SvgjsLinearGradient1048)"
                    strokeLinecap="round"
                    className="TopLeft"
                  ></path>
                </g>
                <defs>
                  <mask id="SvgjsMask1046">
                    <rect width="1440" height="560" fill="#ffffff"></rect>
                  </mask>
                  <linearGradient
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    id="SvgjsLinearGradient1047"
                  >
                    <stop stopColor="rgba(3, 255, 27, 0)" offset="0"></stop>
                    <stop stopColor="rgba(3, 255, 27, 1)" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                    id="SvgjsLinearGradient1048"
                  >
                    <stop stopColor="rgba(0, 34, 56, 0)" offset="0"></stop>
                    <stop stopColor="rgba(0, 34, 56, 1)" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    id="SvgjsLinearGradient1049"
                  >
                    <stop stopColor="rgba(0, 34, 56, 0)" offset="0"></stop>
                    <stop stopColor="rgba(0, 34, 56, 1)" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                    id="SvgjsLinearGradient1050"
                  >
                    <stop stopColor="rgba(3, 255, 27, 0)" offset="0"></stop>
                    <stop stopColor="rgba(3, 255, 27, 1)" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightgreen border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Continue With
                      </h6>
                    </div>
                    {/* <div className="btn-wrapper text-center">
                      <button
                        className="bg-blue bg-opacity-80 active:bg-gray-100 text-lightgreen px-10 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {
                          
                        }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-3"
                          src={require("../../assets/icons/google.svg").default}
                        />
                        Google
                      </button>
                    </div> */}
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      {/* <small>Or sign in with credentials</small> */}
                    </div>
                    <form onSubmit={handleSubmit(loginHandler)}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          {...register("email", {
                            required: true,
                            pattern:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          style={{ transition: "all .15s ease" }}
                        />
                        <div className="text-rose-500 mt-1">
                          {errors.email?.type === "required"
                            ? "Please enter your email address"
                            : errors.email?.type === "pattern" &&
                              "Please enter a valid email address"}
                        </div>
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          {...register("password", { required: true })}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          style={{ transition: "all .15s ease" }}
                        />
                        <div className="text-rose-500 mt-1">
                          {errors.password?.type === "required" &&
                            "Please enter password"}
                        </div>
                      </div>

                      {/* Server-Side Error */}
                      {errorMessage && (
                        <div className="text-rose-500 mt-1">{errorMessage}</div>
                      )}

                      {/* Server-Side Error */}

                      {/* <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div> */}

                      <div className="text-center mt-6">
                        <button
                          className="bg-blue text-lightgreen bg-opacity-80 active:bg-blue text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => {
                            handleSubmit(loginHandler);
                          }}
                        >
                          Sign In
                        </button>
                        <hr className="m-6 border-b-1 border-gray-400" />
                        <Link to="/Signup">
                          <button
                            className="bg-blue text-lightgreen bg-opacity-80 active:bg-blue text-sm font-bold uppercase px-6 py-3 mt-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Create Account ?
                          </button>
                        </Link>
                      </div>
                    </form>

                    <div className="w-1/2 pt-2 px-1">
                      <a
                        href="/resetpassword"
                        className="text-gray-300 hover:text-blue hover:underline"
                      >
                        <small>Forget password</small>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  {/* <div className="w-1/2">
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
