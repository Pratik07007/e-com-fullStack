import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import VerifyOtp from "./components/VerifyOtp";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },{
          path:"/product/:_id",
          element: <ProductDetails/>
        },{
          path:"/verifyotp",
          element : <VerifyOtp/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
