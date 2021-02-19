import "./App.css";
import { NetlifyForm, Honeypot } from "react-netlify-forms";

function App() {
  return (
    <div className="App">
      <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p>Thanks for contacting us!</p>}
            {error && (
              <p>
                Sorry, we could not reach our servers. Please try again later.
              </p>
            )}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </>
        )}
      </NetlifyForm>
    </div>
  );
}

export default App;
