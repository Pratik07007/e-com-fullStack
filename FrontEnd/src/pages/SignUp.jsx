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
    const res = await fetch("http://localhost:3000/userregister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postPayload),
    });
    const good = await res.json();
    toast.success(good.msg);
    setPostPayolad({ email: "", password: "", phone: "", name: "" });
    navigate("/login");
  };
  return (
    <div className="flex flex-col gap-3 py-10">
      <div className="flex justify-center items-center gap-10">
        <form className="flex flex-col" action="submit">
          <label>Name:</label>
          <input
            value={postPayload.name}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, name: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] outline-none text-gray-100 border-solid"
            type="email"
          />
          <label>Phone:</label>
          <input
            value={postPayload.phone}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, phone: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] outline-none text-gray-100 border-solid"
            type="email"
          />
          <label>Email:</label>
          <input
            value={postPayload.email}
            onChange={(e) =>
              setPostPayolad({ ...postPayload, email: e.target.value })
            }
            className="rounded-tr-3xl rounded-br-3xl bg-transparent border-black border-[2px] outline-none text-gray-100 border-solid"
            type="email"
          />
          <label>Password:</label>
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
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUp;
