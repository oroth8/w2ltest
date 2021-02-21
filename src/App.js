import React, { useState, useEffect } from "react";
import ContactForm from "./Form";

function App() {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
