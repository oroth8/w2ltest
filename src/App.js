import React, { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="App">
      <form name="contact" action="/" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" />
        <input
          type="text"
          name="first_name"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
