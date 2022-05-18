import React from "react";
import { useState } from "react";

export const AddContact = (props) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (props.handleClick) props?.handleClick(first, last, email, phone, url);
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="Enter Your first name"
        />
        <input
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder="Enter Your last name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Your phone number"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Image URL"
        />
      </div>
      <div>
        <button
          style={{
            width: "100%",
            padding: "7px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            margin: "4px 0px",
            borderRadius: "5px",
          }}
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};
