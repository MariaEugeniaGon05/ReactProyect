import "./App.css";
import CardWidget from "./Components/Navbar/CardWidget/CardWidget";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar>
        <CardWidget />
      </Navbar>
      <ItemListContainer mensaje="¡Bienvenido a Atenea!" />
    </div>
  );
}

export default App;
