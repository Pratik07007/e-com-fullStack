import React from "react";

const VerifyOtp = () => {
  const checkValidityOfOpt = (event) => {
    event.preventDefault();
    console.log("sent");
  };
  return (
    <div>
      <form action="submit">
        <input className="h-40 w-96 outline none" type="text" />
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
