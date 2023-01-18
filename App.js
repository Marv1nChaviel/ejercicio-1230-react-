import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/componentA";

function App() {
 
  const contactprueba = {
    nombre: "Jetsus",
    apellido: "Josep",
    email: "jetus@example.com",
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <ComponentA contact={contactprueba} />
      </header>
    </div>
  );
}

export default App;