import "./App.css";
import { NetlifyForm, Honeypot } from "react-netlify-forms";

function App() {
  return (
    <div className="App">
      <NetlifyForm
        name="Contact"
        action="/thanks"
        honeypotName="bot-field"
        onSuccess={(response, context) => {
          console.log("Successfully sent form data to Netlify Server");
          context.formRef.current.reset();
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && (
              <p sx={{ variant: "alerts.success", p: 3 }}>
                Thanks for contacting us!
              </p>
            )}
            {error && (
              <p sx={{ variant: "alerts.muted", p: 3 }}>
                Sorry, we could not reach servers. Because it only works on
                Netlify, our GitHub demo does not provide a response.
              </p>
            )}
            <div>
              <label htmlFor="name" sx={{ variant: "forms.label" }}>
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                sx={{ variant: "forms.input" }}
              />
            </div>
            <div sx={{ pt: 2 }}>
              <label htmlFor="message" sx={{ variant: "forms.label" }}>
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                sx={{ variant: "forms.textarea" }}
              />
            </div>
            <div sx={{ pt: 3 }}>
              <button type="submit" sx={{ variant: "buttons.success" }}>
                Submit
              </button>
              <button type="reset" sx={{ variant: "buttons.danger" }}>
                Reset
              </button>
            </div>
          </>
        )}
      </NetlifyForm>
    </div>
  );
}

export default App;
