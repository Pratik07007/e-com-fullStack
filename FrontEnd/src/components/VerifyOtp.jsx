import { BASE_URL } from "@/utils/BASE_URL";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  console.log(state);
  const checkValidityOfOpt = async(event) => {
    event.preventDefault();
    const resp = await fetch(`${BASE_URL}/verifyotp`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: state, otp }),
    });
    const good = await resp.json();
    if (good.msg === "Invalid OTP") {
      toast.error("Invalid OTP");
    } else if (good.msg === "User Verified Succesfully") {
      toast.success("User Verified");
      navigate("/login");
    } else {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <div>
      <form action="submit">
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="h-40 w-96 outline none"
          type="text"
        />
        <button
          className="bg-red-200 px-3 py-3 rounded-3xl"
          onClick={checkValidityOfOpt}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
