import React from "react";
import Form2 from "./Form2";
import ContactForm from "./Form";
import ReactDOM from "react-dom";

ReactDOM.render(<Form2 />, document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <Form2 />
    </div>
  );
}

export default App;
