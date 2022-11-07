import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { toast } from "react-toastify";

import { getOrderStart, getOrderSuccess, getOrderFailure } from "./orderRedux";
import { emptyCart, getCart } from "./cartRedux";

export const login = async (dispatch, user, endpoint, navigate, context) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(endpoint, user);

    dispatch(loginSuccess(res.data));

    toast.success("Login Successful");

    if (context === "cart") {
      navigate("/cart");
      window.location.reload();
    }

    if (context === "home") {
      navigate("/");
      window.location.reload();
    } else if (context === "profile") {
      navigate("/");
    }
  } catch (err) {
    // console.log(err);
    dispatch(loginFailure(err.response.data));
    // toast.error(err.response.data);
  }
};

export const logout = async (dispatch, user) => {
  dispatch(logOut((user = null)));
};

export const userUpdate = async (userId, data, navigate) => {
  try {
    await userRequest.post(`users/address/${userId}`, data).then((res) => {
      if (res.status === 200) {
        toast.success("Address Updated/Added");
        navigate("/cart");
        window.location.reload();
      } else {
        toast.error("Something went wrong");
      }
    });
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const magicLink = async (email, type, target) => {
  try {
    toast.promise(
      publicRequest
        .post("users/sendMagicLink", {
          email,
          type: type,
          target: target,
        })
        .catch((err) => {
          toast.error(err.response.data);
        }),
      {
        pending: "Sending verification Link",
        success: "Link Sent to your Email",
        error: "Link Failed",
      }
    );
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong! Contact us for help");
  }
};

export const passChange = async (id, token, pass) => {
  try {
    await publicRequest
      .post(`users/resetpassword/${id}/${token}`, {
        type: "reset",
        target: "user",
        password: pass,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong! Contact us for help");
  }
};

export const cartSave = async (data) => {
  try {
    await userRequest.post("/cart", data).then((res) => {
      if (res.status === 200) {
        toast.success("Cart Saved");
      } else {
        toast.error("Something went wrong");
      }
    });
  } catch (error) {}
};

export const getOrders = async (dispatch, id) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get(`orders/users/${id}`);
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const newProducts = async () => {
  try {
    await userRequest.get("products?new").then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return res.data;
      } else {
        toast.error("Unable to fetch products");
      }
    });
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const createOrder = async (data) => {
  try {
    await userRequest.post(`orders`, data).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        toast.success("Order Placed");
      } else {
        toast.error("Something went wrong! Check if you are logged in");
      }
    });
  } catch (error) {}
};

export const verifySession = async (id, dispatch, navigate) => {
  try {
    await userRequest.post(`session/verify/${id}`).then((res) => {
      if (res.status === 200) {
        if (res.data.paid === true) {
          toast.success("Order Placed");
          dispatch(emptyCart());
          setTimeout(() => {
            navigate("/orders");
          }, 3000);
          return true;
        }
      } else {
        return false;
      }
    });
  } catch (error) {
    console.log(error);
    await verifySession(id, dispatch);
  }
};

export const getReviews = async (_prodid) => {
  try {
    const res = await publicRequest.get(`products/reviews/${_prodid}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const leaveReview = async (_prodid, data) => {
  try {
    await userRequest.put(`products/reviews/${_prodid}`, data).then((res) => {
      if (res.status === 200) {
        toast.success("Thank you for your review");
      } else {
        toast.error("Cannot leave review");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkoutSession = async (cartItems, userid, order) => {
  try {
    console.log(userid);
    await userRequest
      .post(`session/checkout`, {
        userId: userid,
        cartItems: cartItems,
        order: order,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        } else {
          toast.error("Something went wrong! This might be a gateway issue");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  } catch (error) {
    return error;
  }
};

export const getCartState = async (dispatch, id) => {
  try {
    await userRequest
      .get(`cart/${id}`)
      .then((res) => {
        // console.log(res);
        dispatch(getCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

export const saveCart = async (data) => {
  try {
    await userRequest.put(`cart/save`, data).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
      } else {
        toast.error("Something went wrong");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async (id) => {
  try {
    await userRequest.delete(`cart/delete/${id}`).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
      } else {
        toast.error("Something went wrong");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
