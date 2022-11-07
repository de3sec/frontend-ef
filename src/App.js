import { Routes as Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
// import Login from './pages/auth/login'
// import Signup from './pages/auth/signup'
import Home from "./pages/home/home";
// import Shop from './pages/shop/Shop';
import { Search } from "./components/search/search";
import ProductsPage from "./pages/shop/ProductsPage";
// import ProductView from './components/Product/ProductView';
import Cart from "./pages/checkout/cart.jsx";
import Success from "./pages/checkout/Success";
import Error from "./pages/checkout/Success";
import { useEffect } from "react";
import Header from "./components/Header/header";
import { Profile } from "./pages/profile/profile";
import { addressUpdate, loginSuccess, logOut } from "./redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
// import OrderSum from './pages/profile/orderSummary';
import { ToastContainer, toast } from "react-toastify";
// import { ErrorPage } from './components/error/error';
import { userRequest } from "./requestMethods";
import ToS from "./misc/ToS";
// import TabComponent from './components/Tab/TabComponent';
// import About from './pages/about/about';
import Loader from "./components/loader/loader";
import { ForgetPassword, ResetPassword } from "./pages/auth/ForgetPassword";
import PrivacyPolicy from "./misc/PrivacyPolicy";
import ReturnPolicy from "./misc/ReturnPolicy";
import Team from "./misc/Team";
import ErrorPage from "./misc/404";
import { getCartState } from "./redux/apiCalls";
import UserProfile from "./pages/myaccount/userProfile";

const Login = loadable(() => import("./pages/auth/login"), {
  fallback: <Loader />,
});
const Signup = loadable(() => import("./pages/auth/signup"), {
  fallback: <Loader />,
});
//const Home = loadable(() => import("./pages/home/home"), {
//  fallback: <Loader />
//});
// const Shop = loadable(() => import("./pages/shop/Shop"), {
//   fallback: <Loader />
// });
const OrderSum = loadable(() => import("./pages/profile/orderSummary"), {
  fallback: <Loader />,
});
const About = loadable(() => import("./pages/about/about"), {
  fallback: <Loader />,
});
const ProductView = loadable(() => import("./components/Product/ProductView"), {
  fallback: <Loader />,
});
//  const Profile = loadable(() => import("./pages/profile/profile"), {
//    fallback: <Loader />
//  });
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (user !== null) {
      const check = async () => {
        await userRequest
          .get(`users/verify/${user._id}`)
          .then((res) => {
            if (res.status === 200) {
              dispatch(loginSuccess(user));
              // console.log(res.data);
              dispatch(addressUpdate(res.data?.addresses));
              getCartState(dispatch, user._id);
            } else {
              dispatch(logOut());
              toast.error("Your Session has expired");
            }
          })
          .catch((err) => {
            dispatch(logOut());
            toast.error("Your Session has expired");
          });
      };
      check();
    } else {
      return;
    }
  }, [dispatch]);

  return (
    <div>
      <ToastContainer autoClose={1500} />
      <div className="sticky top-0 z-30">
        <Header></Header>
      </div>
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/shop" element={<ProductsPage />}></Route>
        <Route path="/shop/:category" element={<ProductsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resetpassword" element={<ForgetPassword />}></Route>
        <Route
          path="/resetpassword/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/search" element={<ProductsPage />}></Route>
        <Route path="/products/:category" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<ProductView />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/address" element={<Profile />}></Route>
        <Route path="/orders" element={<OrderSum />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/success/:session_id" element={<Success />}></Route>
        {/* <Route path="*" element={<Error />}></Route> */}
        <Route path="/tos" element={<ToS />}></Route>
        <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        <Route path="/returns" element={<ReturnPolicy />}></Route>
        <Route path="/about" element={<About />}></Route>

        {/* User Account Routes */}
        <Route path="/my-profile" element={<UserProfile />}></Route>
      </Switch>
    </div>
  );
}

export default App;
