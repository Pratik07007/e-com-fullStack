import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen bg-blue-200 p-8">
      <div className="flex flex-row justify-between items-center">
        <div className="md:mb-0">
          <h1 className="text-2xl font-bold">Visit Us</h1>
          <p>Kausaltar, Bhaktapur</p>
          <p>Email: s.dhimal006@gmail.com</p>
          <p>Phone: 9807373150</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Navigate</h2>
          <ul className="list-none">
            <li>
              <NavLink to="/" className="text-black hover:text-red-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-black hover:text-red-500">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-black hover:text-red-500">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="text-black hover:text-red-500">
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/pratik.dhimal.71">
              <FaFacebook className="text-4xl" />
            </a>
            <a href="https://www.instagram.com/pratikdhimal01/">
              <FaInstagram className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/pratik-dhimal-26a54123a/">
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
