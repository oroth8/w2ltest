import React, { useState } from "react";

const Form3 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const sendRequest = async () => {
    console.log("start");
    try {
      const postRequest = await fetch("/.netlify/functions/salesforce_test", {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
        }),
      });

      console.log("POST request status code", postRequest.status);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={(e) => submitHanlder(e)}>
        Submit
      </button>
    </form>
  );
};

export default Form3;
