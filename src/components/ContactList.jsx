import { useState } from "react";
import { AddContact } from "./AddContact";
import { ContactCard } from "./ContactCard";

const initialState = [
  {
    id: 1,
    firstName: "Suhaib",
    lastName: "Gour",
    email: "suhaib@gmail.com",
    phone: "+91789087665",
    avatar:
      "https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Styling-American-Crew-Phillipe-RGMN_58cb1549-9653-4a1e-bbdc-4fee6c4bec4c.jpg?v=1648568598",
  },
  {
    id: 2,
    firstName: "Sachin",
    lastName: "kumars",
    email: "kumarsachin@gmail.com",
    phone: "+914838087665",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPfs7uZgHOZif4QiXDONS4ICTGFKiHs2Y_-woWagHCaKWC8RsuuGBEEp17uhAaYpXois&usqp=CAU",
  },
];

export const ContactList = () => {
  const [contactList, setContactList] = useState(initialState);
  const handleClick = (firstName, lastName, email, phone, avatar) => {
    setContactList([
      ...contactList,
      {
        id: contactList[contactList.length - 1].id + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        avatar: avatar,
      },
    ]);
  };

  return (
    <div>
      <h1>React Contacts</h1>
      <AddContact handleClick={handleClick} />
      {contactList.map((item) => (
        <div key={item.id}>
          <ContactCard
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            phone={item.phone}
            avatar={item.avatar}
          ></ContactCard>
        </div>
      ))}
    </div>
  );
};
