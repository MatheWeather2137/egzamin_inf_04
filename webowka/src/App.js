import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [www, setWww] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  const [summary, setSummary] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSummary({
      www: www,
      login: login,
      password: password,
      isGenerated: checkbox,
    });
  }

  return (
    <div>
      <div>
        <h1>Menedżer haseł wykonał - 00000000000</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group p-3">
            <label htmlFor="wwwInput">Adres WWW:</label>
            <input
              type="text"
              className="form-control"
              id="wwwInput"
              placeholder="Adres strony WWW"
              value={www}
              onChange={(e) => setWww(e.target.value)}
            />
            <label htmlFor="loginInput">Login:</label>
            <input
              type="text"
              className="form-control"
              id="loginInput"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="checkbox"
              id="checkbox"
              checked={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
              className="form-check-input"
            />
            <label htmlFor="checkbox">Wygeneruj hasło:</label>

            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={checkbox}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Zapisz
          </button>
        </form>
      </div>

      <div>
        <p className="p-2 text-primary lead">Adres: {summary.www}</p>
        <p className="p-2">Login: {summary.login}</p>
        <p className="p-2">
          Hasło:{" "}
          {summary.isGenerated ? "automatycznie generowane" : summary.password}
        </p>
      </div>
    </div>
  );
}

export default App;
