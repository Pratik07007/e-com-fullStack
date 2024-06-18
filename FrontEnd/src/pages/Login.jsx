import { BASE_URL } from "@/utils/BASE_URL";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [postPayload, setPostPayolad] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/userLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postPayload),
      });
      const good = await res.json();
      localStorage.setItem("token", good.token);
      {
        good.msg
          ? toast.error(good?.msg)
          : toast.success("Logged In Succesfully");
      }
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong please try again later")
    }
    
  };
  return (
    <div className="flex flex-col justify-center gap-3 py-10 min-h-[70vh]">
      <div className="flex justify-center items-center gap-10">
        <form className="flex flex-col" action="submit">
          <label className="text-4xl">Email:</label>
          <input
            value={postPayload.email}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, email: e.target.value })
            }
            className="w-96 rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] outline-none text-gray-100 border-solid"
            type="email"
          />
          <label className="text-4xl">Password:</label>
          <input
            value={postPayload.password}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, password: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] outline-none text-gray-100 border-solid"
            type="password"
          />
        </form>
        <button
          type="submit"
          className="px-3 py-2 bg-green-200 rounded-2xl"
          onClick={handelSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
