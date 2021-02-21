import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cookie from "js-cookie";

// utm_source: Cookie.get('utm_source'),
// utm_medium: Cookie.get('utm_medium'),
// utm_campaign: Cookie.get('utm_campaign'),
// utm_term: Cookie.get('utm_term'),
// utm_content: Cookie.get('utm_content')

const Form2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const utmMedium = Cookie.get("utm_medium");
  const utmSource = Cookie.get("utm_source");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    const formData = { name, email, message };
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          email,
          message,
          utmMedium,
          utmSource,
        }),
      });
      console.log("success");
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" name="form-name" value="contact" />
      <input type="text" name="utm-medium" value={utmMedium} />
      <input type="text" name="utm-soruce" value={utmSource} />
      <p>
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default Form2;
