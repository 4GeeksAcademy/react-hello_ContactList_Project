import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/apis/fake/contact/agenda/Juan_contact"
    );
    const data = await response.json();
    console.log(data);
    setContacts(data);
  };

  const deleteContact = async (index) => {
    const updateList = contacts.filter((contact, i) => i !== index);
    try {
      const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Juan_contact"),
      {
        method: "DELETE",
        {
           await fetch ("https://playground.4geeks.com/apis/fake/contact/:contact.id")
        }

      }
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getContact();
  }, []);
  return (
    <>
      {contacts.map((contact, index) => {
        return (
          <div className=" container d-flex justify-content-between border ">
            <div className="d-flex">
              <div className="mx-3">imagen</div>
              <div>
                <div>{contact.full_name}</div>
                <div>{contact.email}</div>
                <div>{contact.address}</div>
                <div>{contact.phone}</div>
              </div>
            </div>
            <div>
              <button className="mx-1">
                editar
              </button>
              <button onClick={deleteContact} className="mx-1"> eliminar</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
