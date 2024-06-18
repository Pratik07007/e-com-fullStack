import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [postPayload, setPostPayolad] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/userregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postPayload),
      });
      const good = await res.json();
      toast.success(good.msg);
      setPostPayolad({ email: "", password: "", phone: "", name: "" });
      navigate("/verifyotp");
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    }
  };
  return (
    <div className="flex flex-col justify-center gap-3 py-10 min-h-[70vh]">
      <div className="flex justify-center items-center gap-10">
        <form className="flex flex-col" action="submit">
          <label className="text-4xl">Name:</label>
          <input
            value={postPayload.name}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, name: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] w-96 outline-none text-gray-100 border-solid"
            type="email"
          />
          <label className="text-4xl">Phone:</label>
          <input
            value={postPayload.phone}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, phone: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] w-96 outline-none text-gray-100 border-solid"
            type="email"
          />
          <label className="text-4xl">Email:</label>
          <input
            value={postPayload.email}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, email: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] w-96 outline-none text-gray-100 border-solid"
            type="email"
          />
          <label className="text-4xl">Password:</label>
          <input
            value={postPayload.password}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, password: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] w-96 outline-none text-gray-100 border-solid"
            type="password"
          />
        </form>
        <button
          type="submit"
          className="px-3 py-2 bg-green-200 rounded-2xl"
          onClick={handelSubmit}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;
