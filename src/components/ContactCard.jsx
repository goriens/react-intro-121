import React from "react";
import { useState } from "react";

export const ContactCard = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  avatar,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "4px",
        display: "flex",
        padding: "7px",
        gap: "1rem",
        alignItems: "center",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => setShow(!show)}
    >
      <div className="image">
        <img src={avatar} alt="" />
      </div>
      <div>
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>
          {firstName} {lastName}{" "}
        </div>
        {!show ? (
          ""
        ) : (
          <div style={{ fontSize: "17px", color: "gray" }}>
            {email}
            <br />
            {phone}
          </div>
        )}
      </div>
    </div>
  );
};
