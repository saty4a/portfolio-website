import React, { useEffect, useState } from "react";
import { sendData } from "../sendData/PostData.jsx";

const Contact = () => {
  const [contactData, setContactData] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: "",
  });
  const [success, setSuccess] = useState(false);
  const handleSubmit = () => {
    if (
      contactData.senderEmail == "" ||
      contactData.senderName == "" ||
      contactData.senderMessage == ""
    ) {
      alert("all fields are required");
    } else {
      sendData(contactData).then((response) => {
        if (response.status === 200) {
          setSuccess(true);
          setContactData({
            ...contactData,
            senderName: "",
            senderEmail: "",
            senderMessage: "",
          });
          setTimeout(()=>{
            setSuccess(false);
          },2000)
        }
      });
    }
  };
  return (
    <section
      id="contact"
      className="flex flex-col w-full m-auto lg:w-1/2 2xl:w-1/3"
    >
      <label htmlFor="name" className="text-lg">
        Name
      </label>
      <input
        type="text"
        placeholder="name"
        value={contactData.senderName}
        onChange={(e) =>
          setContactData({ ...contactData, senderName: e.target.value })
        }
        className="h-[40px] mb-3 text-black ps-2"
      ></input>
      <label htmlFor="email" className="text-lg">
        Email
      </label>
      <input
        type="email"
        placeholder="email"
        value={contactData.senderEmail}
        onChange={(e) =>
          setContactData({ ...contactData, senderEmail: e.target.value })
        }
        className="h-[40px] mb-3 text-black ps-2"
      ></input>
      <label htmlFor="text" className="text-lg">
        Message
      </label>
      <textarea
        placeholder="message.."
        value={contactData.senderMessage}
        onChange={(e) =>
          setContactData({ ...contactData, senderMessage: e.target.value })
        }
        className="h-[10rem] text-black ps-2"
      ></textarea>
      <button
        type="submit"
        className="mt-6 border-2 w-1/3 m-auto sm:w-1/5"
        onClick={handleSubmit}
      >
        submit
      </button>
      {success ? <p className="text-center mt-3">Data submitted successfully</p> : ""}
    </section>
  );
};

export default Contact;
