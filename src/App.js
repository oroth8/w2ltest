import "./App.css";

function App() {
  return (
    <div className="App">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="first_name" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
