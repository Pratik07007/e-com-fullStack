import { BASE_URL } from "@/utils/BASE_URL";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import zod from "zod";

const ContactUs = () => {
  const contactUsPayloadSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.string().min("6", "Invalid Phone number"),
    msg: zod.string(),
  });
  const [contactUsPayload, setContactUsPayload] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const handelContactUsSubmit = async (e) => {
    e.preventDefault();

    if (
      contactUsPayload.email === "" ||
      contactUsPayload.phone === "" ||
      contactUsPayload.name === "" ||
      contactUsPayload.msg === ""
    ) {
      toast.error("Every field is mandatory");
      return;
    } else {
      const response = contactUsPayloadSchema.safeParse(contactUsPayload);
      if (!response.success) {
        toast.error(response.error.issues[0].message);
      } else {
        try {
          const res = await fetch(`${BASE_URL}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactUsPayload),
          });
          const good = await res.json();
          toast(good.msg);
        } catch (error) {
          toast.error(
            "Message not submited, please try again or mail us at s.dhimal006@gmail.com"
          );
        }
      }
    }
  };

  return (
    <>
      <form action="submit">
        <div className="min-h-[70vh] flex flex-col gap-3 items-center justify-center">
          <div className="flex flex-col gap-2">
            <label className="text-3xl" htmlFor="">
              Name:
            </label>
            <input
              value={contactUsPayload.name}
              onChange={(event) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  name: event.target.value,
                })
              }
              className="w-96"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-3xl" htmlFor="">
              Phone:
            </label>
            <input
              value={contactUsPayload.phone}
              onChange={(event) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  phone: event.target.value,
                })
              }
              className="w-96"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-3xl" htmlFor="">
              Email:
            </label>
            <input
              value={contactUsPayload.email}
              onChange={(event) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  email: event.target.value,
                })
              }
              className="w-96"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Message</label>
            <textarea
              value={contactUsPayload.msg}
              onChange={(event) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  msg: event.target.value,
                })
              }
              className="w-96"
              name="message"
              rows={8}
              cols={80}
              id="message"
              placeholder="ENTER YOUR MESSAEG HERE"
            ></textarea>
            <button
              onClick={handelContactUsSubmit}
              className="rounded-3xl bg-green-200 px-3 py-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      ;
    </>
  );
};

export default ContactUs;
