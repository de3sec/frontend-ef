import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { magicLink, passChange } from "../../redux/apiCalls";
import { publicRequest, userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const validateEmail = (emailVal) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailVal).toLowerCase());
  };

  const onSubmit = (email) => {
    if (validateEmail(email)) {
      magicLink(email, "reset", "user");
      navigate("/");
    } else {
      return toast.error("Invalid Email");
    }
  };

  return (
    <div className="font-mono bg-gray-400 w-full h-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen px-6 w-full">
          <div className="w-full flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 object-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1574676130659-a1d0dd4791fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80')",
              }}
            ></div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="uppercase pt-4 mb-2 text-2xl">
                  Forgot Your Password?
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => onSubmit(email)}
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/register"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/login"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const token = window.location.pathname.split("/")[3];
  const id = window.location.pathname.split("/")[2];

  const [error, setError] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await publicRequest
          .get(`users/auth/${id}/${token}?type=user`)
          .then((res) => {
            if (res.status === 200) {
              setAuth(true);
            }
          });
      } catch (err) {
        console.log(err.response.data);
        setAuth(false);
      }
    };
    verifyToken();
  }, [id, token]);

  const validatePassword = (passwordVal) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return re.test(String(passwordVal));
  };

  const onSubmit = (pass, cnf_pass) => {
    if (validatePassword(pass)) {
      if (pass === cnf_pass) {
        passChange(id, token, pass);
        setError(false);
        toast.success("Password Changed Successfully");
        return navigate("/");
      } else {
        toast.error("Password doesn't match");
      }
    } else {
      setError(true);
      return toast.error("Invalid Password");
    }
  };
  return (
    <div className="font-mono bg-gray-400 w-ful h-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen px-6 w-full">
          {auth ? (
            <div className="w-full flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 object-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1574676130659-a1d0dd4791fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80')",
                }}
              ></div>
              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <div className="px-8 mb-4 text-center">
                  <h3 className="pt-4 mb-2 text-2xl">Enter New Password</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    We are there just one more step to go. Just enter your new
                    password!
                  </p>
                </div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Enter new password..."
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="confirm_password"
                      type="password"
                      onChange={(e) => setConfirmPass(e.target.value)}
                      placeholder="Confirm new password..."
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => onSubmit(password, confirmPass)}
                    >
                      Reset Password
                    </button>
                  </div>
                  {error && (
                    <div className="error w-full mb-2 rounded-md p-2 text-xs text-red-800 bg-red-200">
                      <ul>
                        <li>Password must contain at least 8 characters</li>
                        <li>
                          Password must contain at least one uppercase letter
                        </li>
                        <li>
                          Password must contain at least one lowercase letter
                        </li>
                        <li>Password must contain at least one number</li>
                        <li>
                          Password must contain at least one special character
                        </li>
                      </ul>
                    </div>
                  )}
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="/register"
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="/login"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <h1 className="uppercase text-5xl bg-red-200 p-4 text-red-500 rounded-lg shadow-md">
              UNAUTHORIZED or expired
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export { ForgetPassword, ResetPassword };
