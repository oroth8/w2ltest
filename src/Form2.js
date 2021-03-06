import React, { useState, useEffect } from "react";
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
  const [test, setTest] = useState("");
  const [utmSource, setUtmSource] = useState("null");
  const [utmMedium, setUtmMedium] = useState("");

  // const utmMedium = Cookie.get("utm_medium");
  // const utmSource = Cookie.get("utm_source");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  useEffect(() => {
    // setUtmMedium(Cookie.get("utm_medium"));
    // setUtmSource(Cookie.get("utm_source"));
    setUtmSource("Source");
    setUtmMedium("Medium");
  }, []);

  const handleSubmit = (e) => {
    // const formData = { name, email, message };
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "test",
          name,
          email,
          message,
          test,
          utm_medium: utmMedium,
          utm_source: utmSource,
        }),
      });
      console.log("success");
      console.log(Cookie.get("utm_medium"));
      console.log(Cookie.get("utm_source"));
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="test"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="test" />
      <input type="hidden" name="utm_medium" value={utmMedium} />
      <input type="text" name="utm_source" value={utmSource} />
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
        <label>
          Test:{" "}
          <textarea
            name="message"
            value={test}
            onChange={(e) => setTest(e.target.value)}
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
