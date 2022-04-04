import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "./Dropdown";
import Messages from "./Messages";

function App() {
  return (
    <div className="App">
      <p>Home > Messages</p>
      <div className="nav-bar">
        <h2>Messages</h2>
        <Dropdown />
      </div>
      <br />
      <input placeholder="🔍 Search" />
      <hr />
      <Messages />
    </div>
  );
}

export default App;
